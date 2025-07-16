class Computer {
    cpu: string;
    ram: string;
    hardDisk?: string;
    monitor?: string;

    constructor(builder: ComputerBuilder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.hardDisk = builder.hardDisk;
        this.monitor = builder.monitor;
    }
}

class ComputerBuilder {
    cpu: string;
    ram: string;
    hardDisk?: string;
    monitor?: string;

    constructor(cpu: string, ram: string) {
        this.cpu = cpu;
        this.ram = ram;
    }

    addStorage(hardDisk: string): this {
        this.hardDisk = hardDisk;
        return this;
    }

    addMonitor(monitor: string): this {
        this.monitor = monitor;
        return this;
    }

    build(): Computer {
        return new Computer(this);
    }
}

export { ComputerBuilder, Computer };
