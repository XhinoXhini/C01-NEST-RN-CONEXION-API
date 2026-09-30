import { MascotasService } from './mascotas.service';
export declare class MascotasController {
    private readonly mascotasService;
    constructor(mascotasService: MascotasService);
    findOne(id: string): import("./mascotas.service").Mascota;
    darLike(id: string): import("./mascotas.service").Mascota;
}
