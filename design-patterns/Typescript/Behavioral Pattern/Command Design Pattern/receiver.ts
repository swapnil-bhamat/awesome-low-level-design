class Light {
    turnOn(): void {
        console.log('The light is on.');
    }
    turnOff(): void {
        console.log('The light is off.');
    }
}

class Fan {
    turnOn(): void {
        console.log('The fan is on.');
    }
    turnOff(): void {
        console.log('The fan is off.');
    }
}

export { Light, Fan };
