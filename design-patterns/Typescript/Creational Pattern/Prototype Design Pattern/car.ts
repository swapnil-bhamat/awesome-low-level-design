class Car {
    model: string;
    year: number;
    color: string;

    constructor(model: string, year: number, color: string) {
        this.model = model;
        this.year = year;
        this.color = color;
    }

    clone(): Car {
        return new Car(this.model, this.year, this.color);
    }

    getDetails(): string {
        return `Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    }
}

export default Car;
