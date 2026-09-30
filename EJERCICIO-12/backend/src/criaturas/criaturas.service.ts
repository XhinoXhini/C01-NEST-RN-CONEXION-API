import { Injectable, NotFoundException } from '@nestjs/common';

export interface Criatura {
  id: number;
  nombre: string;
  elemento: string;
  avatar: string;
  likes: number;
}

@Injectable()
export class CriaturasService {
  private criaturas: Criatura[] = [
    { id: 1, nombre: 'Ignis', elemento: 'Fuego 🔥', avatar: '🐉', likes: 12 },
    { id: 2, nombre: 'Aqualis', elemento: 'Agua 💧', avatar: '🌊', likes: 19 },
    { id: 3, nombre: 'Terran', elemento: 'Tierra 🌿', avatar: '🪨', likes: 7 },
    { id: 4, nombre: 'Zephyr', elemento: 'Aire 🌪️', avatar: '🦅', likes: 15 },
  ];

  findAll(): Criatura[] {
    return this.criaturas;
  }

  findOne(id: number): Criatura {
    const criatura = this.criaturas.find((c) => c.id === id);
    if (!criatura) {
      throw new NotFoundException(`Criatura con ID ${id} no encontrada`);
    }
    return criatura;
  }

  darLike(id: number): Criatura {
    const criatura = this.findOne(id);
    criatura.likes += 1;
    return criatura;
  }
}