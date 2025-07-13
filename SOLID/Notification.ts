// =============================
// 1. Single Responsibility Principle (SRP)
// =============================
// Each class has one clear responsibility

class User {
    constructor(public name: string, public email: string, public phone: string) { }
}

// =============================
// 2. Open/Closed Principle (OCP)
// =============================
// Open for extension, closed for modification

// =============================
// 3. Liskov Substitution Principle (LSP)
// =============================
// Subclasses can be substituted for their base class/interface without breaking functionality

interface Notifier {
    send(user: User, message: string): void;
}

class EmailNotifier implements Notifier {
    send(user: User, message: string): void {
        console.log(`Sending Email to ${user.email}: ${message}`);
    }
}

class SMSNotifier implements Notifier {
    send(user: User, message: string): void {
        console.log(`Sending SMS to ${user.phone}: ${message}`);
    }
}

// =============================
// 4. Interface Segregation Principle (ISP)
// =============================
// Clients should not depend on methods they do not use
// Separate interfaces can be defined for more complex systems,
// but in this simple case `Notifier` stays clean and focused

// =============================
// 5. Dependency Inversion Principle (DIP)
// =============================
// High-level module (NotificationService) depends on abstraction (Notifier interface), not concrete classes

class NotificationService {
    constructor(private notifiers: Notifier[]) { }

    notify(user: User, message: string): void {
        for (const notifier of this.notifiers) {
            notifier.send(user, message);
        }
    }
}

// =============================
// Usage
// =============================
const user = new User("Alice", "alice@example.com", "1234567890");

const notifiers: Notifier[] = [
    new EmailNotifier(),
    new SMSNotifier()
];

const notificationService = new NotificationService(notifiers);
notificationService.notify(user, "Your order has been shipped!");
