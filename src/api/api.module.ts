import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [PrismaModule, ConfigModule],
})
export class ApiModule {}
