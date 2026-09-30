"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriaturasService = void 0;
const common_1 = require("@nestjs/common");
let CriaturasService = class CriaturasService {
    criaturas = [
        { id: 1, nombre: 'Ignis', elemento: 'Fuego 🔥', avatar: '🐉', likes: 12 },
        { id: 2, nombre: 'Aqualis', elemento: 'Agua 💧', avatar: '🌊', likes: 19 },
        { id: 3, nombre: 'Terran', elemento: 'Tierra 🌿', avatar: '🪨', likes: 7 },
        { id: 4, nombre: 'Zephyr', elemento: 'Aire 🌪️', avatar: '🦅', likes: 15 },
    ];
    findAll() {
        return this.criaturas;
    }
    findOne(id) {
        const criatura = this.criaturas.find((c) => c.id === id);
        if (!criatura) {
            throw new common_1.NotFoundException(`Criatura con ID ${id} no encontrada`);
        }
        return criatura;
    }
    darLike(id) {
        const criatura = this.findOne(id);
        criatura.likes += 1;
        return criatura;
    }
};
exports.CriaturasService = CriaturasService;
exports.CriaturasService = CriaturasService = __decorate([
    (0, common_1.Injectable)()
], CriaturasService);
//# sourceMappingURL=criaturas.service.js.map