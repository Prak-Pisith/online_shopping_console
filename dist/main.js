"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_decorator_1 = require("./order-decorator");
const payment_strategy_1 = require("./payment-strategy");
const product_factory_1 = require("./product-factory");
const product_interface_1 = require("./product-interface");
const shopping_cart_component_1 = require("./shopping-cart-component");
const store_1 = require("./store");
const user_database_1 = require("./user-database");
const user_observer_1 = require("./user-observer");
// Singleton Store
const store = store_1.Store.getInstance();
// Singleton UserDB
const userDB = user_database_1.UserDatabase.getInstance();
// Product Factory
const productFactory = new product_factory_1.ProductFactory();
// Instances
// Create Products
const friedRice = productFactory.createProduct(1, 'Fried Rices', product_interface_1.CategoryType.FOOD, 3.5);
const coke = productFactory.createProduct(2, 'Coke', product_interface_1.CategoryType.DRINK, 1.5);
// Add Products to Store
store.addProduct(friedRice);
store.addProduct(coke);
// Display Products
console.log('======== Products Loading =====');
console.log(JSON.stringify(store.productList()));
console.log(`\n`);
// Create Users
const john = { id: 1, name: 'John' };
const alice = { id: 2, name: 'Alice' };
// Add Users to UserDatabase
userDB.addUser(john);
userDB.addUser(alice);
// Display Users
console.log('======== Users Loading =====');
console.log(JSON.stringify(userDB.userList()));
console.log(`\n`);
// Shopping Cart
// 1. Individual Cart
const productToCart1 = new shopping_cart_component_1.ProductCart(friedRice);
const productToCart2 = new shopping_cart_component_1.ProductCart(coke);
// 2. Bundle Carts
const bundleCarts = new shopping_cart_component_1.BundleCart();
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
const basicOrder = new order_decorator_1.BasicOrder(bundleCarts.calculatePrice());
// 2. Discount Order (Decorator)
const discountOrder = new order_decorator_1.DiscountOrder(basicOrder, 10);
// Display Orders
console.log('======== Orders Loading =====');
console.log(`Basic Order: ${basicOrder.calculateTotal()}$`);
console.log(`Discount Order: ${discountOrder.calculateTotal()}$`);
console.log(`\n`);
// Payment Methods
const paymentMethods1 = new payment_strategy_1.PaymentMethods();
const paymentMethods2 = new payment_strategy_1.PaymentMethods();
// 1. Credit Card
paymentMethods1.setPaymentMethod(new payment_strategy_1.CreditCardPayment('1122-3344-5566'));
// 2. Paypal
paymentMethods2.setPaymentMethod(new payment_strategy_1.PaypalPayment('asura@haki.com'));
// Payment notify users
paymentMethods1.addObserver(new user_observer_1.UserObserver(john.id));
paymentMethods2.addObserver(new user_observer_1.UserObserver(alice.id));
// Display Payment Methods
console.log('======== Payment Methods Loading =====');
paymentMethods1.pay(basicOrder.calculateTotal());
paymentMethods2.pay(basicOrder.calculateTotal());
console.log(`\n`);
