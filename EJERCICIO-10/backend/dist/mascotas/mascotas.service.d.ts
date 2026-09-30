export interface Mascota {
    id: number;
    nombre: string;
    tipo: string;
    likes: number;
}
export declare class MascotasService {
    private mascotas;
    findOne(id: number): Mascota;
    darLike(id: number): Mascota;
}
