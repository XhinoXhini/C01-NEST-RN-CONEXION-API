export interface Heroe {
    id: number;
    nombre: string;
    poder: string;
    universo: string;
}
export declare class HeroesService {
    private heroes;
    findOne(id: number): Heroe;
}
