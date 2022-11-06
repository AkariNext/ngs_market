import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Users } from '@ngs-market/db';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Users])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
