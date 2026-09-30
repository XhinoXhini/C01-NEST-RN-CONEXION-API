import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
  private juegos = [
    { id: 1, titulo: 'The Legend of Zelda', genero: 'aventura' },
    { id: 2, titulo: 'Hollow Knight', genero: 'metroidvania' },
    { id: 3, titulo: 'Elden Ring', genero: 'rpg' },
    { id: 4, titulo: 'Uncharted', genero: 'aventura' },
  ];

  findAll(genero?: string) {
    if (genero) {
      return this.juegos.filter(
        (juego) => juego.genero.toLowerCase() === genero.toLowerCase(),
      );
    }
    return this.juegos;
  }
}