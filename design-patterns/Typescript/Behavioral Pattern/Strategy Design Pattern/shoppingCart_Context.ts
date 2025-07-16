import { PaymentGateway } from './paymentStrategy';

interface Item {
    name: string;
    price: number;
}

class ShoppingCart {
    private items: Item[] = [];
    private paymentMethod: PaymentGateway | null = null;

    addItem(item: Item): void {
        this.items.push(item);
    }

    viewCart(): void {
        console.log('Your cart contains:');
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - $${item.price}`);
        });
    }

    setPaymentMethod(paymentMethod: PaymentGateway): void {
        this.paymentMethod = paymentMethod;
    }

    checkout(): void {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        if (this.paymentMethod) {
            console.log(`Total Bill: $${total}`);
            this.paymentMethod.pay(total);
        } else {
            console.log('Please confirm your payment method');
        }
    }
}

export { ShoppingCart, Item };
