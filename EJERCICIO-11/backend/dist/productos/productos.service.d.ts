export interface Producto {
    id: number;
    nombre: string;
    precio: number;
}
export declare class ProductosService {
    private productos;
    findAll(): Producto[];
    create(data: {
        nombre: string;
        precio: number;
    }): Producto;
}
