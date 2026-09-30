import { PizzasService } from './pizzas.service';
export declare class PizzasController {
    private readonly pizzasService;
    constructor(pizzasService: PizzasService);
    findAll(): {
        id: number;
        nombre: string;
        precio: number;
    }[];
}
