// ==========================
// 1. Abstraction
// ==========================
// Abstract class hides the details and exposes only essential methods
abstract class Vehicle {
    protected speed: number = 0;

    constructor() { }

    // Abstract method to be implemented by subclasses
    abstract startEngine(): void;

    // Concrete method shared by all vehicles
    accelerate(): void {
        this.speed += 10;
        console.log(`Accelerating to ${this.speed} km/h`);
    }

    // Encapsulation: internal state protected, exposed via getter
    getCurrentSpeed(): number {
        return this.speed;
    }
}

// ==========================
// 2. Inheritance
// ==========================
// `Car` and `Bike` inherit from `Vehicle`
class Car extends Vehicle {
    private fuelLevel: number;

    constructor(fuelLevel: number) {
        super();
        this.fuelLevel = fuelLevel;
    }

    // ==========================
    // 3. Polymorphism
    // ==========================
    startEngine(): void {
        if (this.fuelLevel > 0) {
            console.log("Car engine started.");
        } else {
            console.log("Cannot start. No fuel.");
        }
    }
}

class Bike extends Vehicle {
    private isKickStarted: boolean;

    constructor() {
        super();
        this.isKickStarted = false;
    }

    startEngine(): void {
        this.isKickStarted = true;
        console.log("Bike engine kick-started.");
    }
}

// ==========================
// 4. Encapsulation
// ==========================
// Properties like `speed`, `fuelLevel`, and `isKickStarted` are private/protected
// Only accessible via methods like `accelerate()`, `getCurrentSpeed()`

// ==========================
// Testing OOP in action
// ==========================
const myCar: Vehicle = new Car(50);
const myBike: Vehicle = new Bike();

const garage: Vehicle[] = [myCar, myBike];

for (const vehicle of garage) {
    vehicle.startEngine();          // Polymorphic call
    vehicle.accelerate();           // Shared behavior
    console.log(`Speed: ${vehicle.getCurrentSpeed()} km/h\n`);
}
