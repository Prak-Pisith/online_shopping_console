export enum CategoryType {
  FOOD = 'Food',
  DRINK = 'Drink',
  OTHERS = 'Others',
}

export interface ProductInterface {
  id: number;
  productName: string;
  category: CategoryType;
  productPrice: number;
}