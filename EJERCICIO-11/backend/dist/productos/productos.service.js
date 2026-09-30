"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
let ProductosService = class ProductosService {
    productos = [
        { id: 1, nombre: 'Teclado Mecánico', precio: 49.99 },
        { id: 2, nombre: 'Ratón Gaming', precio: 29.99 },
    ];
    findAll() {
        return this.productos;
    }
    create(data) {
        const nuevoProducto = {
            id: this.productos.length > 0 ? Math.max(...this.productos.map((p) => p.id)) + 1 : 1,
            nombre: data.nombre,
            precio: data.precio,
        };
        this.productos.push(nuevoProducto);
        return nuevoProducto;
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)()
], ProductosService);
//# sourceMappingURL=productos.service.js.map