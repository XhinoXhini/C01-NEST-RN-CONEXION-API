import { Injectable } from '@nestjs/common';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
}

@Injectable()
export class ProductosService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Pizza Margarita 🍕', precio: 9.5, categoria: 'Pizzas' },
    { id: 2, nombre: 'Hamburguesa Doble 🍔', precio: 11.0, categoria: 'Hamburguesas' },
    { id: 3, nombre: 'Tacos al Pastor 🌮', precio: 8.5, categoria: 'Mexicana' },
    { id: 4, nombre: 'Ensalada César 🥗', precio: 7.5, categoria: 'Entrantes' },
  ];

  findAll(): Producto[] {
    return this.productos;
  }
}