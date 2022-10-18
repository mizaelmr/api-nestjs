import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const filterToken = request.rawHeaders.filter((item: string) =>
      item.includes('Bearer'),
    );
    const token = filterToken[0].split(' ');

    try {
      this.jwtService.verify(token[1], {
        secret: this.configService.get('JWT_SECRECT_KEY'),
      });
    } catch (error) {
      return false;
    }

    return true;
  }
}
