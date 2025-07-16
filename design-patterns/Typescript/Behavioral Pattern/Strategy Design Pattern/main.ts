import { ShoppingCart, Item } from './shoppingCart_Context';
import { Cash, UPI, Card } from './paymentStrategy';

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: 'Laptop', price: 500 });
shoppingCart.addItem({ name: 'Mobile', price: 200 });
shoppingCart.addItem({ name: 'TV', price: 1000 });

shoppingCart.viewCart();

// Checkout with Card
shoppingCart.setPaymentMethod(new Card('123456789', '123'));
shoppingCart.checkout();

// Checkout with Cash
shoppingCart.setPaymentMethod(new Cash());
shoppingCart.checkout();

// Checkout with UPI
shoppingCart.setPaymentMethod(new UPI('user@upi', '1234'));
shoppingCart.checkout();
