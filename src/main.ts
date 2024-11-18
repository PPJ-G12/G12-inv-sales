import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Ignora propiedades no definidas en los DTOs
    forbidNonWhitelisted: true, // Lanza error si el cliente envía propiedades no definidas
    transform: true, // Transforma automáticamente los datos al tipo esperado
  }));

  await app.listen(3000); // Puerto de la aplicación
}
bootstrap();
