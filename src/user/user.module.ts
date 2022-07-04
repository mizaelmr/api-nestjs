import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserSchema } from './entities/user.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema, collection: 'users' },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, JwtService, ConfigService],
  exports: [UserService],
})
export class UserModule {}
