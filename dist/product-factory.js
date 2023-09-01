"use strict";
// Factory
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFactory = void 0;
class ProductFactory {
    createProduct(id, productName, category, productPrice) {
        return { id, productName, category, productPrice };
    }
}
exports.ProductFactory = ProductFactory;
