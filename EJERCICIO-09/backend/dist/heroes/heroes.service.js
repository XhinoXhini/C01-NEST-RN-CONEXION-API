"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesService = void 0;
const common_1 = require("@nestjs/common");
let HeroesService = class HeroesService {
    heroes = [
        { id: 1, nombre: 'Spider-Man 🕷️', poder: 'Sentido arácnido y agilidad', universo: 'Marvel' },
        { id: 2, nombre: 'Batman 🦇', poder: 'Intelecto y artes marciales', universo: 'DC' },
        { id: 3, nombre: 'Iron Man 🦾', poder: 'Armadura tecnológica de combate', universo: 'Marvel' },
        { id: 4, nombre: 'Flash ⚡', poder: 'Supervelocidad', universo: 'DC' },
    ];
    findOne(id) {
        const heroe = this.heroes.find((h) => h.id === id);
        if (!heroe) {
            throw new common_1.NotFoundException(`Superhéroe con ID ${id} no encontrado`);
        }
        return heroe;
    }
};
exports.HeroesService = HeroesService;
exports.HeroesService = HeroesService = __decorate([
    (0, common_1.Injectable)()
], HeroesService);
//# sourceMappingURL=heroes.service.js.map