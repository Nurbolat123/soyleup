import { Type } from 'class-transformer';
import {
  ArrayMaxSize, IsArray, IsBoolean, IsDateString, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Max, MaxLength, Min,
  ValidateNested,
} from 'class-validator';

export class HomeworkIdParamDto {
  @IsUUID()
  id: string;
}

export class AssignHomeworkDto {
  @IsUUID()
  studentId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(4000)
  instructions?: string;

  @IsOptional()
  @IsBoolean()
  requiresIntegrityCheck?: boolean;

  @IsOptional()
  @IsDateString()
  dueAt?: string;

  /** Материалы для изучения (ключи из homework-material-presign) — PDF, картинки, Word, 1–10 штук */
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(10)
  @IsString({ each: true })
  materialFileKeys?: string[];
}

export class IntegritySignalsDto {
  @IsInt()
  @Min(0)
  tabAwayCount: number;

  @IsInt()
  @Min(0)
  fullscreenExitCount: number;

  @IsBoolean()
  pasteDetected: boolean;
}

export class SubmitHomeworkDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  text?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  audioKey?: string;

  /** Вложения к письменному ответу (ключи из file-presign) — фото, PDF, Word, 1–10 штук */
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(10)
  @IsString({ each: true })
  fileKeys?: string[];

  @IsOptional()
  @ValidateNested()
  @Type(() => IntegritySignalsDto)
  integritySignals?: IntegritySignalsDto;
}

const ALLOWED_HOMEWORK_FILE_TYPES = [
  'image/jpeg', 'image/png', 'image/webp', 'image/heic',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
] as const;

/** Presigned-загрузка вложения к письменному ответу — тот же приватный бакет, что и голос. */
export class PresignFileDto {
  @IsString()
  @IsNotEmpty()
  fileName: string;

  @IsIn(ALLOWED_HOMEWORK_FILE_TYPES)
  contentType: string;
}

export class RubricDto {
  @IsInt()
  @Min(1)
  @Max(5)
  vocabulary: number;

  @IsInt()
  @Min(1)
  @Max(5)
  grammar: number;

  @IsInt()
  @Min(1)
  @Max(5)
  fluency: number;

  @IsInt()
  @Min(1)
  @Max(5)
  pronunciation: number;
}

export class ReviewHomeworkDto {
  @IsIn(['APPROVE', 'RETURN'])
  action: 'APPROVE' | 'RETURN';

  @IsOptional()
  @ValidateNested()
  @Type(() => RubricDto)
  rubric?: RubricDto;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  comment?: string;

  /** Оценка письменного ответа (текст/файлы), 1–5. Влияет на навык Grammar. */
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  writtenGrade?: number;
}

