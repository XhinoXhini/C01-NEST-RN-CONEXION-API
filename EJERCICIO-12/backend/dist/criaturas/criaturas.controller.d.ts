import { CriaturasService } from './criaturas.service';
export declare class CriaturasController {
    private readonly criaturasService;
    constructor(criaturasService: CriaturasService);
    findAll(): import("./criaturas.service").Criatura[];
    findOne(id: string): import("./criaturas.service").Criatura;
    darLike(id: string): import("./criaturas.service").Criatura;
}
