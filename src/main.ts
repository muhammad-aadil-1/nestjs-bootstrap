import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     enableDebugMessages: true,
  //     skipUndefinedProperties: true,
  //     skipNullProperties: true,
  //   }),
  // );
  await app.listen(3000);
}
bootstrap();
