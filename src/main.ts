import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /** Stating swagger configuration */
  const config = new DocumentBuilder()
    .setTitle('Books API')
    .setDescription('The books API')
    .setVersion('1.0')
    .addTag('books')
    .build();

  // const options: SwaggerDocumentOptions = {
  //   operationIdFactory: (
  //     controllerKey: string,
  //     methodKey: string
  //   ) => methodKey
  // };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
