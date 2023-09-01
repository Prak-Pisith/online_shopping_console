// Factory

import { CategoryType, ProductInterface } from "./product-interface";

export class ProductFactory {
  createProduct(
    id: number,
    productName: string,
    category: CategoryType,
    productPrice: number,
  ): ProductInterface {
    return {id, productName, category, productPrice}
  }
}