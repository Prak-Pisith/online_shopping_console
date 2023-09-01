// Decorator Pattern

export interface Order {
  calculateTotal(): number;
}

export class BasicOrder implements Order {
  constructor(private amount: number) {}

  calculateTotal(): number {
    return this.amount;
  }
}

export class DiscountOrder implements Order {
  constructor (private order: Order, private discountPercentage: number) {}

  calculateTotal(): number {
    const originalTotal = this.order.calculateTotal();
    const discountAmount = (originalTotal * this.discountPercentage) / 100;
    return originalTotal - discountAmount;
  }
}