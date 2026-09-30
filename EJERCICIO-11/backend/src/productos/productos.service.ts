import { Injectable } from '@nestjs/common';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable()
export class ProductosService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Teclado Mecánico', precio: 49.99 },
    { id: 2, nombre: 'Ratón Gaming', precio: 29.99 },
  ];

  findAll(): Producto[] {
    return this.productos;
  }

  create(data: { nombre: string; precio: number }): Producto {
    const nuevoProducto: Producto = {
      id: this.productos.length > 0 ? Math.max(...this.productos.map((p) => p.id)) + 1 : 1,
      nombre: data.nombre,
      precio: data.precio,
    };
    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }
}