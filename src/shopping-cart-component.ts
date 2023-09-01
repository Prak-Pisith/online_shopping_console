// Composite Pattern

import { ProductInterface } from "./product-interface";

interface ShoppingCartComponent {
  calculatePrice(): number;
}

export class ProductCart implements ShoppingCartComponent {
  
  constructor(private product: ProductInterface) {}

  calculatePrice(): number {
    return this.product.productPrice;
  }
}

export class BundleCart implements ShoppingCartComponent {

  private components: ShoppingCartComponent[] = [];

  addComponent(component: ShoppingCartComponent): void {
    this.components.push(component);
  }

  calculatePrice(): number {
    return this.components.reduce((total, component) => total + component.calculatePrice(), 0);
  }
}

