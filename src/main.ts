import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { initSwagger } from './swagger.app';
import * as compression from 'compression'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('main');
  const config = app.get(ConfigService);
  const port = parseInt(config.get<string>('PORT'), 10);

  app.use(compression());
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted:true
  }));

  initSwagger(app);
  await app.listen(port);
  logger.debug(`Server is running at ${await app.getUrl()}/api/docs`);
}
bootstrap();
