// Singleton

import { ProductInterface } from "./product-interface";

export class Store {

  private static instance: Store | null = null;

  // Product list
  private products: ProductInterface[] = [];

  private constructor(){}

  static getInstance(): Store {
    if(!Store.instance) Store.instance = new Store();
    return Store.instance;
  }

  addProduct (product: ProductInterface): void {
    this.products.push(product);
  }

  productList(): ProductInterface[] {
    return this.products;
  }
}
