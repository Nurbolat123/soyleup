import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../common/auth.decorators';
import { ContentAccessGuard } from '../common/guards/content-access.guard';
import { PresignUploadDto } from './dto/uploads.dto';
import { UploadsService } from './uploads.service';

@ApiTags('admin-content')
@ApiBearerAuth()
@Roles('ADMIN', 'CURATOR')
@UseGuards(ContentAccessGuard)
@Controller('admin/content/uploads')
export class UploadsController {
  constructor(private readonly uploads: UploadsService) {}

  @Post('presign')
  presign(@Body() dto: PresignUploadDto) {
    return this.uploads.presign(dto);
  }
}
