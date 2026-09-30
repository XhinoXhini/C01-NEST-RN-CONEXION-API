export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
}
export declare class ProductosService {
    private productos;
    findAll(): Producto[];
}
