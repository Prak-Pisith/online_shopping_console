"use strict";
// Using Strategy Pattern
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethods = exports.PaypalPayment = exports.CreditCardPayment = void 0;
class CreditCardPayment {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount) {
        console.log(`Paid ${amount}$ using Credit Card number: ${this.cardNumber}`);
    }
    getStrategyDetails() {
        return `Credit Card: ${this.cardNumber}`;
    }
}
exports.CreditCardPayment = CreditCardPayment;
class PaypalPayment {
    constructor(email) {
        this.email = email;
    }
    pay(amount) {
        console.log(`Paid ${amount}$ using PayPal account: ${this.email}`);
    }
    getStrategyDetails() {
        return `PayPal: ${this.email}`;
    }
}
exports.PaypalPayment = PaypalPayment;
class PaymentMethods {
    constructor() {
        // Observer subjects
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1)
            this.observers.splice(index, 1);
    }
    notifyObservers(message) {
        this.observers.forEach(observer => observer.updateObserver(message));
    }
    setPaymentMethod(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    pay(amount) {
        if (!this.paymentStrategy)
            console.log(`Invalid payment method`);
        this.paymentStrategy.pay(amount);
        // notify observers
        this.notifyObservers(`${amount} was paid by ${this.paymentStrategy.getStrategyDetails()}`);
    }
}
exports.PaymentMethods = PaymentMethods;
