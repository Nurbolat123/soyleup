import { BadGatewayException, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'node:crypto';
import { Env } from '../config/env';
import { createS3Client, ensureBucketQuiet } from './s3';

const UPLOAD_URL_TTL_SECONDS = 5 * 60;
const LISTEN_URL_TTL_SECONDS = 5 * 60;

interface PresignInput {
  fileName: string;
  contentType: string;
}

/**
 * Приватный бакет для личных файлов учеников — голосовые записи (placement/уроки/ДЗ) и
 * фото письменных работ к ДЗ. Отдельно от общедоступного `content` для учебных материалов.
 * Presigned GET — короткий срок жизни; для голоса доступ пишется в аудит вызывающим
 * сервисом (правило «доступ к записям — в аудит»), для фото это не требуется.
 */
@Injectable()
export class SpeakingStorageService implements OnModuleInit {
  private readonly client: S3Client;
  private readonly bucket: string;

  constructor(private readonly config: ConfigService<Env, true>) {
    this.bucket = config.get('S3_BUCKET_SPEAKING', { infer: true });
    this.client = createS3Client({
      endpoint: config.get('S3_ENDPOINT', { infer: true }),
      region: config.get('S3_REGION', { infer: true }),
      accessKey: config.get('S3_ACCESS_KEY', { infer: true }),
      secretKey: config.get('S3_SECRET_KEY', { infer: true }),
    });
  }

  async onModuleInit() {
    await ensureBucketQuiet(this.client, this.bucket, { publicRead: false });
  }

  async presign(dto: PresignInput, studentId: string) {
    const ext = dto.fileName.includes('.') ? dto.fileName.split('.').pop() : 'bin';
    const key = `${studentId}/${randomUUID()}.${ext}`;
    try {
      const uploadUrl = await getSignedUrl(
        this.client,
        new PutObjectCommand({ Bucket: this.bucket, Key: key, ContentType: dto.contentType }),
        { expiresIn: UPLOAD_URL_TTL_SECONDS },
      );
      return { uploadUrl, key, expiresIn: UPLOAD_URL_TTL_SECONDS };
    } catch (e) {
      throw new BadGatewayException(`Хранилище файлов недоступно: ${(e as Error).message}`);
    }
  }

  async getListenUrl(key: string): Promise<string> {
    try {
      return await getSignedUrl(this.client, new GetObjectCommand({ Bucket: this.bucket, Key: key }), {
        expiresIn: LISTEN_URL_TTL_SECONDS,
      });
    } catch (e) {
      throw new BadGatewayException(`Хранилище файлов недоступно: ${(e as Error).message}`);
    }
  }
}
