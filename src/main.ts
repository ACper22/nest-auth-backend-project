import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  /* p://localhost:xxxx/auth/login' from origin 'http://localhost:xxxx' 
  has been blocked by CORS policy:
  Response to preflight request doesn't pass access control check:
  No 'Access-Control-Allow-Origin'
  header is present on the requested resource. */

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

