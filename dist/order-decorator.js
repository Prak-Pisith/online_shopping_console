"use strict";
// Decorator Pattern
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountOrder = exports.BasicOrder = void 0;
class BasicOrder {
    constructor(amount) {
        this.amount = amount;
    }
    calculateTotal() {
        return this.amount;
    }
}
exports.BasicOrder = BasicOrder;
class DiscountOrder {
    constructor(order, discountPercentage) {
        this.order = order;
        this.discountPercentage = discountPercentage;
    }
    calculateTotal() {
        const originalTotal = this.order.calculateTotal();
        const discountAmount = (originalTotal * this.discountPercentage) / 100;
        return originalTotal - discountAmount;
    }
}
exports.DiscountOrder = DiscountOrder;
