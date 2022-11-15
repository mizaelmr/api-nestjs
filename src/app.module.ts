import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './middleware/auth.middleware';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ExerciceModule } from './exercice/exercice.module';
import { FinanceModule } from './finance/finance.module';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from './schedule/schedule.module';
import { UserModule } from './user/user.module';
import { AvaliableModule } from './avaliable/avaliable.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule,
    AuthModule,
    ExerciceModule,
    ScheduleModule,
    FinanceModule,
    AvaliableModule,
    CategoriesModule,
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
