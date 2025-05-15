import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('API')

  app.enableCors()

  app.enableCors({ origin: 'http://localhost:4200' });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();