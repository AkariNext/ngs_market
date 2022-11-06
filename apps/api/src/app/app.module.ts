import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { mikroConfig } from '@ngs-market/db';
import { Users } from 'libs/db/src/lib/entities/user.entity';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroConfig),
    MikroOrmModule.forFeature([Users]),
    ItemsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, UsersService],
})
export class AppModule {}
