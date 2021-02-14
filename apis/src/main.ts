import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({ validationError: { target: false } }),
  );
  const options = new DocumentBuilder()
    .setTitle('APIs')
    .setDescription('APIs description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('apis-doc', app, document);
  await app.listen(process.env.PORT || 3010);
}
bootstrap();
