import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { AuthUser } from '../auth.decorators';

/**
 * Используется вместе с @Roles('ADMIN', 'CURATOR') на контроллерах контента.
 * У ADMIN доступ всегда есть; CURATOR — только если админ включил ему
 * управление контентом (см. AdminService.setContentAccess).
 */
@Injectable()
export class ContentAccessGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const user: AuthUser | undefined = ctx.switchToHttp().getRequest().user;
    if (user?.role === 'CURATOR' && !user.canManageContent) {
      throw new ForbiddenException({
        code: 'CONTENT_ACCESS_REQUIRED',
        message: 'Content management access has not been granted by an admin',
      });
    }
    return true;
  }
}
