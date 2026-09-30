import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    { id: 1, nombre: 'Luna 🐱', tipo: 'Gato' },
    { id: 2, nombre: 'Rocky 🐶', tipo: 'Perro' },
    { id: 3, nombre: 'Nemo 🐠', tipo: 'Pez' },
  ];

  findOne(id: number) {
    const mascota = this.mascotas.find((m) => m.id === id);
    if (!mascota) {
      throw new NotFoundException(`Mascota con id ${id} no encontrada`);
    }
    return mascota;
  }
}
