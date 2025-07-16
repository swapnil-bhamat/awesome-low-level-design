import { Circle } from './circle';

export class CircleFactory {
    private circles: { [key: string]: Circle };

    constructor() {
        this.circles = {};
    }

    getCircle(color: string): Circle {
        // Check if the circle exists
        if (!this.circles[color]) {
            // Create a new circle if it doesn't exist
            this.circles[color] = new Circle(color);
        }
        return this.circles[color];
    }

    get circleCount(): number {
        return Object.keys(this.circles).length;
    }
}
