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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriaturasController = void 0;
const common_1 = require("@nestjs/common");
const criaturas_service_1 = require("./criaturas.service");
let CriaturasController = class CriaturasController {
    criaturasService;
    constructor(criaturasService) {
        this.criaturasService = criaturasService;
    }
    findAll() {
        return this.criaturasService.findAll();
    }
    findOne(id) {
        return this.criaturasService.findOne(Number(id));
    }
    darLike(id) {
        return this.criaturasService.darLike(Number(id));
    }
};
exports.CriaturasController = CriaturasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CriaturasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CriaturasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/like'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CriaturasController.prototype, "darLike", null);
exports.CriaturasController = CriaturasController = __decorate([
    (0, common_1.Controller)('criaturas'),
    __metadata("design:paramtypes", [criaturas_service_1.CriaturasService])
], CriaturasController);
//# sourceMappingURL=criaturas.controller.js.map