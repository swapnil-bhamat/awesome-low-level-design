// ====================================================
// S - Single Responsibility Principle (SRP)
// A class should have only one reason to change.
// Separate classes for managing user data and emails.
// ====================================================

class User {
    constructor(public name: string, public email: string) { }
    // Only handles user-related data
}

class EmailService {
    sendEmail(to: string, message: string): void {
        console.log(`Email sent to ${to}: ${message}`);
    }
}

// ====================================================
// O - Open/Closed Principle (OCP)
// Software entities should be open for extension,
// but closed for modification. Use polymorphism instead
// of changing core logic for new types.
// ====================================================

abstract class BaseNotification {
    abstract send(): void;
}

class EmailNotification extends BaseNotification {
    send(): void {
        console.log("Sending Email...");
    }
}

class SMSNotification extends BaseNotification {
    send(): void {
        console.log("Sending SMS...");
    }
}

// Function works for all Notification types without modification
function sendNotification(notification: BaseNotification): void {
    notification.send();
}

// ====================================================
// L - Liskov Substitution Principle (LSP)
// Subtypes must be substitutable for their base types
// without breaking the application logic.
// ====================================================

// Bad example: Ostrich extends Bird but breaks fly behavior
// Better approach: Split behavior-specific interfaces

interface IFlyable {
    fly(): void;
}

class Sparrow implements IFlyable {
    fly(): void {
        console.log("Sparrow is flying");
    }
}

class Ostrich {
    // Ostrich does not implement IFlyable because it can't fly
}

// ====================================================
// I - Interface Segregation Principle (ISP)
// Don't force classes to implement unused interfaces.
// Split into smaller, more specific interfaces.
// ====================================================

interface Walkable {
    walk(): void;
}

interface Flyable {
    fly(): void;
}

class Eagle implements Walkable, Flyable {
    walk(): void {
        console.log("Eagle walking");
    }
    fly(): void {
        console.log("Eagle flying");
    }
}

class Dog implements Walkable {
    walk(): void {
        console.log("Dog walking");
    }
}

// ====================================================
// D - Dependency Inversion Principle (DIP)
// High-level modules should not depend on low-level modules.
// Both should depend on abstractions.
// ====================================================

interface IMessageService {
    sendMessage(to: string, message: string): void;
}

class SMSService implements IMessageService {
    sendMessage(to: string, message: string): void {
        console.log(`SMS sent to ${to}: ${message}`);
    }
}

class NotificationService {
    constructor(private service: IMessageService) { }

    notify(to: string, message: string): void {
        this.service.sendMessage(to, message);
    }
}

// Usage example:

const user = new User("Alice", "alice@example.com");

// SRP
const emailService = new EmailService();
emailService.sendEmail(user.email, "Welcome to our platform!");

// OCP
sendNotification(new EmailNotification());
sendNotification(new SMSNotification());

// LSP
const sparrow = new Sparrow();
sparrow.fly(); // works as expected

// ISP
const eagle = new Eagle();
eagle.fly();
eagle.walk();

const dog = new Dog();
dog.walk();

// DIP
const smsService = new SMSService();
const notifier = new NotificationService(smsService);
notifier.notify("9876543210", "Your OTP is 123456");
