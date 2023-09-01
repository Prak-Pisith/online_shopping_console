// Using Strategy Pattern

import { ObserverInterface, ObserverSubject } from "./observer";

interface PaymentStrategy {
  pay(amount: number): void;
  getStrategyDetails(): string;
}

export class CreditCardPayment implements PaymentStrategy {
  constructor (private cardNumber: string) {}

  pay(amount: number): void {
    console.log(`Paid ${amount}$ using Credit Card number: ${this.cardNumber}`);
  }

  getStrategyDetails(): string {
    return `Credit Card: ${this.cardNumber}`;
  }
}

export class PaypalPayment implements PaymentStrategy {
  constructor (private email: string){}

  pay(amount: number): void {
    console.log(`Paid ${amount}$ using PayPal account: ${this.email}`);
  }

  getStrategyDetails(): string {
    return `PayPal: ${this.email}`;
  }
}

export class PaymentMethods implements ObserverSubject {
  private paymentStrategy: PaymentStrategy;

  // Observer subjects
  private observers: ObserverInterface[] = [];

  addObserver(observer: ObserverInterface): void {
    this.observers.push(observer);
  }

  removeObserver(observer: ObserverInterface): void {
    const index = this.observers.indexOf(observer);
    if(index !== -1) this.observers.splice(index, 1);
  }

  notifyObservers(message: string): void {
    this.observers.forEach(observer => observer.updateObserver(message));
  }


  setPaymentMethod(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  pay(amount: number): void {
    if (!this.paymentStrategy) console.log(`Invalid payment method`);
    this.paymentStrategy.pay(amount);
    
    // notify observers
    this.notifyObservers(`${amount} was paid by ${this.paymentStrategy.getStrategyDetails()}`);
  }
}