import { MascotasService } from './mascotas.service';
export declare class MascotasController {
    private readonly mascotasService;
    constructor(mascotasService: MascotasService);
    findOne(id: string): {
        id: number;
        nombre: string;
        tipo: string;
    };
}
