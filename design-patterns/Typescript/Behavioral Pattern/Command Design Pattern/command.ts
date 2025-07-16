// Abstract Command
abstract class Command {
    abstract execute(): void;
}

// Concrete Command
class LightOnCommand extends Command {
    private light: Light;
    constructor(light: Light) {
        super();
        this.light = light;
    }
    execute(): void {
        this.light.turnOn();
    }
}

class LightOffCommand extends Command {
    private light: Light;
    constructor(light: Light) {
        super();
        this.light = light;
    }
    execute(): void {
        this.light.turnOff();
    }
}

class FanOnCommand extends Command {
    private fan: Fan;
    constructor(fan: Fan) {
        super();
        this.fan = fan;
    }
    execute(): void {
        this.fan.turnOn();
    }
}

class FanOffCommand extends Command {
    private fan: Fan;
    constructor(fan: Fan) {
        super();
        this.fan = fan;
    }
    execute(): void {
        this.fan.turnOff();
    }
}

// Receiver classes
class Light {
    turnOn(): void {
        console.log('Light is ON');
    }
    turnOff(): void {
        console.log('Light is OFF');
    }
}

class Fan {
    turnOn(): void {
        console.log('Fan is ON');
    }
    turnOff(): void {
        console.log('Fan is OFF');
    }
}

export { Command, LightOnCommand, LightOffCommand, FanOnCommand, FanOffCommand, Light, Fan };
