import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CriaturasController } from './criaturas/criaturas.controller';
import { CriaturasService } from './criaturas/criaturas.service';

@Module({
  imports: [],
  controllers: [AppController, CriaturasController],
  providers: [AppService, CriaturasService],
})
export class AppModule {}
