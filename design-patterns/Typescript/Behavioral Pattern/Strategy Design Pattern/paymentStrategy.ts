abstract class PaymentGateway {
    abstract pay(amount: number): void;
}

class Cash extends PaymentGateway {
    pay(amount: number): void {
        console.log(`Payment of ${amount} done using Cash`);
    }
}

class UPI extends PaymentGateway {
    private UPI_ID: string;
    private UPI_PIN: string;
    constructor(UPI_ID: string, UPI_PIN: string) {
        super();
        this.UPI_ID = UPI_ID;
        this.UPI_PIN = UPI_PIN;
    }
    pay(amount: number): void {
        console.log(`Payment of ${amount} done using UPI with ID ${this.UPI_ID} and PIN ${this.UPI_PIN}`);
    }
}

class Card extends PaymentGateway {
    private cardNumber: string;
    private CVV: string;
    constructor(cardNumber: string, CVV: string) {
        super();
        this.cardNumber = cardNumber;
        this.CVV = CVV;
    }
    pay(amount: number): void {
        console.log(`Payment of ${amount} done using Card with Number ${this.cardNumber} and CVV ${this.CVV}`);
    }
}

export { PaymentGateway, Cash, UPI, Card };
