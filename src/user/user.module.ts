import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userSchema } from './entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: userSchema, collection: 'users' },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, JwtService, ConfigService],
  exports: [UserService],
})
export class UserModule {}
