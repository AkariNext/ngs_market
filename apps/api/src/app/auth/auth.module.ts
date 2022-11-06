import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Users } from '@ngs-market/db';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Users])],
  providers: [AuthService, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
