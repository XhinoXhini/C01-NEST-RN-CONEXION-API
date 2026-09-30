import { Injectable, NotFoundException } from '@nestjs/common';

export interface Heroe {
  id: number;
  nombre: string;
  poder: string;
  universo: string;
}

@Injectable()
export class HeroesService {
  private heroes: Heroe[] = [
    { id: 1, nombre: 'Spider-Man 🕷️', poder: 'Sentido arácnido y agilidad', universo: 'Marvel' },
    { id: 2, nombre: 'Batman 🦇', poder: 'Intelecto y artes marciales', universo: 'DC' },
    { id: 3, nombre: 'Iron Man 🦾', poder: 'Armadura tecnológica de combate', universo: 'Marvel' },
    { id: 4, nombre: 'Flash ⚡', poder: 'Supervelocidad', universo: 'DC' },
  ];

  findOne(id: number): Heroe {
    const heroe = this.heroes.find((h) => h.id === id);
    if (!heroe) {
      throw new NotFoundException(`Superhéroe con ID ${id} no encontrado`);
    }
    return heroe;
  }
}