"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzasService = void 0;
const common_1 = require("@nestjs/common");
let PizzasService = class PizzasService {
    pizzas = [
        { id: 1, nombre: 'Margarita 🍕', precio: 9 },
        { id: 2, nombre: 'Cuatro Quesos 🧀', precio: 11 },
        { id: 3, nombre: 'Barbacoa 🍖', precio: 12 },
    ];
    findAll() {
        return this.pizzas;
    }
};
exports.PizzasService = PizzasService;
exports.PizzasService = PizzasService = __decorate([
    (0, common_1.Injectable)()
], PizzasService);
//# sourceMappingURL=pizzas.service.js.map