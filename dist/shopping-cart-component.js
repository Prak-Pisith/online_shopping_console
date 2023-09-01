"use strict";
// Composite Pattern
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleCart = exports.ProductCart = void 0;
class ProductCart {
    constructor(product) {
        this.product = product;
    }
    calculatePrice() {
        return this.product.productPrice;
    }
}
exports.ProductCart = ProductCart;
class BundleCart {
    constructor() {
        this.components = [];
    }
    addComponent(component) {
        this.components.push(component);
    }
    calculatePrice() {
        return this.components.reduce((total, component) => total + component.calculatePrice(), 0);
    }
}
exports.BundleCart = BundleCart;
