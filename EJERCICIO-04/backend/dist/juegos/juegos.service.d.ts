export declare class JuegosService {
    private juegos;
    findAll(genero?: string): {
        id: number;
        titulo: string;
        genero: string;
    }[];
}
