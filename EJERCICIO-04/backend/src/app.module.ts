import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JuegosController } from './juegos/juegos.controller';
import { JuegosService } from './juegos/juegos.service';

@Module({
  imports: [],
  controllers: [AppController, JuegosController],
  providers: [AppService, JuegosService],
})
export class AppModule {}
