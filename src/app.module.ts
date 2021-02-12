import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnicornModule } from './unicorn/unicorn.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UnicornModule,
  MongooseModule.forRoot(`mongodb://${process.env.MONGODB_IP}:${process.env.MONGODB_PORT}/${process.env.MONGODV_NAME}`),
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
