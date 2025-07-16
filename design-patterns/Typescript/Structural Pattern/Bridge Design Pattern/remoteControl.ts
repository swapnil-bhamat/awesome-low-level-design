import { Device } from './device';

class RemoteControl {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    pressOn(): void {
        this.device.turnOn();
    }

    pressOff(): void {
        this.device.turnOff();
    }
}

export default RemoteControl;
