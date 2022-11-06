import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Items } from '@ngs-market/db';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [MikroOrmModule.forFeature([Items])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
