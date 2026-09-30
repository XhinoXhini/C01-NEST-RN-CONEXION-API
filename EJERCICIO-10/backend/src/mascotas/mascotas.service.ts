import { Injectable, NotFoundException } from '@nestjs/common';

export interface Mascota {
  id: number;
  nombre: string;
  tipo: string;
  likes: number;
}

@Injectable()
export class MascotasService {
  private mascotas: Mascota[] = [
    { id: 1, nombre: 'Toby 🐶', tipo: 'Perro', likes: 14 },
    { id: 2, nombre: 'Misi 🐱', tipo: 'Gato', likes: 8 },
  ];

  findOne(id: number): Mascota {
    const mascota = this.mascotas.find((m) => m.id === id);
    if (!mascota) {
      throw new NotFoundException(`Mascota con ID ${id} no encontrada`);
    }
    return mascota;
  }

  darLike(id: number): Mascota {
    const mascota = this.findOne(id);
    mascota.likes += 1;
    return mascota;
  }
}