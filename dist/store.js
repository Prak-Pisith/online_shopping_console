"use strict";
// Singleton
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
class Store {
    constructor() {
        // Product list
        this.products = [];
    }
    static getInstance() {
        if (!Store.instance)
            Store.instance = new Store();
        return Store.instance;
    }
    addProduct(product) {
        this.products.push(product);
    }
    productList() {
        return this.products;
    }
}
exports.Store = Store;
Store.instance = null;
