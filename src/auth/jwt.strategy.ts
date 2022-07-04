import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'cs+UUmK6p91eHt2Mx9b5+g7i15hLWaJdGcGLPml0L44=',
    });
  }

  async validate(data: any) {
    return { id: data.sub, email: data.email };
  }
}
