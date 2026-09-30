"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzasController = void 0;
const common_1 = require("@nestjs/common");
const pizzas_service_1 = require("./pizzas.service");
let PizzasController = class PizzasController {
    pizzasService;
    constructor(pizzasService) {
        this.pizzasService = pizzasService;
    }
    findAll() {
        return this.pizzasService.findAll();
    }
};
exports.PizzasController = PizzasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PizzasController.prototype, "findAll", null);
exports.PizzasController = PizzasController = __decorate([
    (0, common_1.Controller)('pizzas'),
    __metadata("design:paramtypes", [pizzas_service_1.PizzasService])
], PizzasController);
//# sourceMappingURL=pizzas.controller.js.map