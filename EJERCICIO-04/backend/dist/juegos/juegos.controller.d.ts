import { JuegosService } from './juegos.service';
export declare class JuegosController {
    private readonly juegosService;
    constructor(juegosService: JuegosService);
    findAll(genero?: string): {
        id: number;
        titulo: string;
        genero: string;
    }[];
}
