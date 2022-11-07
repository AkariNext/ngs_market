/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import secureSession from '@fastify/secure-session';
import { AppModule } from './app/app.module';
import { config } from '@ngs-market/config';
import { RemovePasswordInterceptor } from './app/remove-pass';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const port = process.env.PORT || 3333;
  await app.register(secureSession, {
    secret: config.auth.secret,
    salt: config.auth.salt
  })
  app.useGlobalInterceptors(new RemovePasswordInterceptor())
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/`
  );
}

bootstrap();
