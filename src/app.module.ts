import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './middleware/auth.middleware';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
// implementa middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(); // inserir grupo de rotas
  }
}

// export class AppModule {}
// add middleware
