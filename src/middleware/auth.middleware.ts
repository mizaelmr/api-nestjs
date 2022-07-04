import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async use(req: any, res: any, next: () => void) {
    const bearerHeader = req.headers.authorization;
    const accessToken = bearerHeader && bearerHeader.split(' ')[1];

    if (!bearerHeader || !accessToken) {
      return next();
    }

    try {
      const payload = await this.jwtService.verify(accessToken, {
        secret: this.configService.get('JWT_SECRECT_KEY'),
      });
      console.log(payload, 'console via middleware');
    } catch (error) {
      throw new ForbiddenException('Sessão expirada.');
    }

    next();
  }
}
