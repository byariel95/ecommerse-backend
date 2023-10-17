import { DocumentBuilder , SwaggerModule} from '@nestjs/swagger';
import { INestApplication} from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
    const swaggerConfig = new DocumentBuilder()
      //.addBearerAuth()
    .setTitle('ECOMMERCE API')
    .setDescription('Api Build Nugget') 
    .setVersion('1.2')
    .build();
    const document = SwaggerModule.createDocument(app,swaggerConfig);
    SwaggerModule.setup('/',app, document,{
        swaggerOptions:{
            filter:true,
            tagsSorter:'alpha',
            operationsSorter: 'alpha',
        }
    });
};