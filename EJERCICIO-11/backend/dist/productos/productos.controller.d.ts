import { ProductosService } from './productos.service';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    findAll(): import("./productos.service").Producto[];
    create(body: {
        nombre: string;
        precio: number;
    }): import("./productos.service").Producto;
}
