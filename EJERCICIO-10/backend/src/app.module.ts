import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MascotasController } from './mascotas/mascotas.controller';
import { MascotasService } from './mascotas/mascotas.service';

@Module({
  imports: [],
  controllers: [AppController, MascotasController],
  providers: [AppService, MascotasService],
})
export class AppModule {}
