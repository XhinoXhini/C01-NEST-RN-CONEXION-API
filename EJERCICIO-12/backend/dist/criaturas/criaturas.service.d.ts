export interface Criatura {
    id: number;
    nombre: string;
    elemento: string;
    avatar: string;
    likes: number;
}
export declare class CriaturasService {
    private criaturas;
    findAll(): Criatura[];
    findOne(id: number): Criatura;
    darLike(id: number): Criatura;
}
