// The Device interface
abstract class Device {
    abstract turnOn(): void;
    abstract turnOff(): void;
}

// Concrete class for TV
class TV extends Device {
    turnOn(): void {
        console.log("TV is now ON.");
    }

    turnOff(): void {
        console.log("TV is now OFF.");
    }
}

// Concrete class for Radio
class Radio extends Device {
    turnOn(): void {
        console.log("Radio is now ON.");
    }

    turnOff(): void {
        console.log("Radio is now OFF.");
    }
}

export { Device, TV, Radio };
