import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRECT_KEY,
      signOptions: { expiresIn: '20s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
