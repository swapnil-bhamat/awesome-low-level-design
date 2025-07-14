/*
How to achieve OOP principles in real-world TypeScript?

Encapsulation – Using access specifiers (private, protected, public) to restrict access and grouping data and behavior in classes.
Inheritance – Using the extends keyword to inherit behavior from a base class.
Polymorphism – Achieved via method overriding (run-time polymorphism); method overloading is simulated using union types or optional params.
Abstraction – Using abstract classes and abstract methods to define partial blueprints that must be implemented in derived classes.

*/

// Example: Banking System
// Abstraction: Abstract class defining the blueprint for all accounts
abstract class Account {
    // Encapsulation: Using private/protected/public access modifiers
    protected accountNumber: string;
    protected balance: number;
    private ownerName: string;

    constructor(accountNumber: string, ownerName: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    // Abstract method to be implemented by subclasses
    abstract calculateInterest(): number;

    // Encapsulated method
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ₹${amount}. New balance: ₹${this.balance}`);
        } else {
            console.log("Insufficient funds or invalid amount.");
        }
    }

    public getBalance(): number {
        return this.balance;
    }

    public getOwner(): string {
        return this.ownerName;
    }
}

// Inheritance: SavingsAccount and CurrentAccount extend the base class
class SavingsAccount extends Account {
    private interestRate: number = 0.05;

    // Polymorphism: Overriding calculateInterest method
    calculateInterest(): number {
        return this.balance * this.interestRate;
    }
}

class CurrentAccount extends Account {
    private overdraftLimit: number = 5000;

    // Polymorphism: Overriding calculateInterest method
    calculateInterest(): number {
        return 0; // No interest for current accounts
    }

    // Extending behavior with overdraft facility
    public withdraw(amount: number): void {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            console.log(`Withdrew ₹${amount}. New balance: ₹${this.balance}`);
        } else {
            console.log("Overdraft limit exceeded.");
        }
    }
}

// Usage
const savingAcc = new SavingsAccount("SA123", "Alice", 10000);
const currentAcc = new CurrentAccount("CA456", "Bob", 2000);

savingAcc.deposit(2000);
console.log("Interest (Savings): ₹" + savingAcc.calculateInterest());

currentAcc.withdraw(6000);
console.log("Interest (Current): ₹" + currentAcc.calculateInterest());
