import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HolaController } from './hola/hola.controller';

@Module({
  imports: [],
  controllers: [AppController, HolaController],
  providers: [AppService],
})
export class AppModule {}
