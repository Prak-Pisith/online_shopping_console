import { BasicOrder, DiscountOrder } from "./order-decorator";
import { CreditCardPayment, PaymentMethods, PaypalPayment } from "./payment-strategy";
import { ProductFactory } from "./product-factory";
import { CategoryType, ProductInterface } from "./product-interface";
import { BundleCart, ProductCart } from "./shopping-cart-component";
import { Store } from "./store";
import { UserDatabase } from "./user-database";
import { UserInterface } from "./user-interface";
import { UserObserver } from "./user-observer";

// Singleton Store
const store: Store = Store.getInstance();

// Singleton UserDB
const userDB: UserDatabase = UserDatabase.getInstance();

// Product Factory
const productFactory: ProductFactory = new ProductFactory();


// Instances

// Create Products
const friedRice: ProductInterface = productFactory.createProduct(1, 'Fried Rices', CategoryType.FOOD, 3.5);
const coke: ProductInterface = productFactory.createProduct(2, 'Coke', CategoryType.DRINK, 1.5);

// Add Products to Store
store.addProduct(friedRice);
store.addProduct(coke);

// Display Products
console.log('======== Products Loading =====');
console.log(JSON.stringify(store.productList()));
console.log(`\n`);

// Create Users
const john: UserInterface = {id: 1, name: 'John'};
const alice: UserInterface = {id: 2, name: 'Alice'};

// Add Users to UserDatabase
userDB.addUser(john);
userDB.addUser(alice);

// Display Users
console.log('======== Users Loading =====');
console.log(JSON.stringify(userDB.userList()));
console.log(`\n`);

// Shopping Cart
// 1. Individual Cart
const productToCart1: ProductCart = new ProductCart(friedRice);
const productToCart2: ProductCart = new ProductCart(coke);
// 2. Bundle Carts
const bundleCarts: BundleCart = new BundleCart();
bundleCarts.addComponent(productToCart1);
bundleCarts.addComponent(productToCart2);

// Display Shopping Carts
console.log('======== Shopping Carts Loading =====');
console.log(`Fried Rice: ${productToCart1.calculatePrice()}$`);
console.log(`Coke: ${productToCart2.calculatePrice()}$`);
console.log(`Bundle: ${bundleCarts.calculatePrice()}$`);
console.log(`\n`);

// Orders
// 1. Basic Order
const basicOrder: BasicOrder = new BasicOrder(bundleCarts.calculatePrice());
// 2. Discount Order (Decorator)
const discountOrder: DiscountOrder = new DiscountOrder(basicOrder, 10);

// Display Orders
console.log('======== Orders Loading =====');
console.log(`Basic Order: ${basicOrder.calculateTotal()}$`);
console.log(`Discount Order: ${discountOrder.calculateTotal()}$`);
console.log(`\n`);

// Payment Methods
const paymentMethods1: PaymentMethods = new PaymentMethods();
const paymentMethods2: PaymentMethods = new PaymentMethods();
// 1. Credit Card
paymentMethods1.setPaymentMethod(new CreditCardPayment('1122-3344-5566'));
// 2. Paypal
paymentMethods2.setPaymentMethod(new PaypalPayment('asura@haki.com'));

// Payment notify users
paymentMethods1.addObserver(new UserObserver(john.id));
paymentMethods2.addObserver(new UserObserver(alice.id));

// Display Payment Methods
console.log('======== Payment Methods Loading =====');
paymentMethods1.pay(basicOrder.calculateTotal());
paymentMethods2.pay(basicOrder.calculateTotal());
console.log(`\n`);



