// Intrinsic state
export class Circle {
    private color: string;

    constructor(color: string) {
        this.color = color;
    }

    draw(size: string, x: number, y: number): void {
        console.log(`Drawing a ${this.color} circle of size ${size} at position (${x}, ${y})`);
    }
}
