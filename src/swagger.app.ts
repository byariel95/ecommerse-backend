import { DocumentBuilder , SwaggerModule} from '@nestjs/swagger';
import { INestApplication} from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
    const swaggerConfig = new DocumentBuilder()
      //.addBearerAuth()
    .setTitle('ECOMMERSE API')
    .setDescription('Ecommerse Backend ') 
    .setVersion('1.0')
    .build();
    const document = SwaggerModule.createDocument(app,swaggerConfig);
    SwaggerModule.setup('api/docs',app, document,{
        swaggerOptions:{
            filter:true
        }
    });
};