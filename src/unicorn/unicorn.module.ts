import { Module } from '@nestjs/common';
import { UnicornService } from './unicorn.service';
import { UnicornController } from './unicorn.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Unicorn, UnicornSchema } from './entities/unicorn.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Unicorn.name, schema: UnicornSchema }])
  ],
  controllers: [UnicornController],
  providers: [UnicornService]
})
export class UnicornModule {}
