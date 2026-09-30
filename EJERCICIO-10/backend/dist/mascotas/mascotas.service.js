"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotasService = void 0;
const common_1 = require("@nestjs/common");
let MascotasService = class MascotasService {
    mascotas = [
        { id: 1, nombre: 'Toby 🐶', tipo: 'Perro', likes: 14 },
        { id: 2, nombre: 'Misi 🐱', tipo: 'Gato', likes: 8 },
    ];
    findOne(id) {
        const mascota = this.mascotas.find((m) => m.id === id);
        if (!mascota) {
            throw new common_1.NotFoundException(`Mascota con ID ${id} no encontrada`);
        }
        return mascota;
    }
    darLike(id) {
        const mascota = this.findOne(id);
        mascota.likes += 1;
        return mascota;
    }
};
exports.MascotasService = MascotasService;
exports.MascotasService = MascotasService = __decorate([
    (0, common_1.Injectable)()
], MascotasService);
//# sourceMappingURL=mascotas.service.js.map