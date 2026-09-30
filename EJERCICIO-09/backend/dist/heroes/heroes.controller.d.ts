import { HeroesService } from './heroes.service';
export declare class HeroesController {
    private readonly heroesService;
    constructor(heroesService: HeroesService);
    findOne(id: string): import("./heroes.service").Heroe;
}
