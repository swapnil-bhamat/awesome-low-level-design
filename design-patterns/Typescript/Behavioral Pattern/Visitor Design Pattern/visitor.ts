abstract class ShapeVisitor {
    abstract visitCircle(circle: Circle): void;
    abstract visitRectangle(rectangle: Rectangle): void;
}

class AreaVisitor extends ShapeVisitor {
    visitCircle(circle: Circle): void {
        const area = Math.PI * circle.radius * circle.radius;
        console.log(`Area of circle: ${area}`);
    }
    visitRectangle(rectangle: Rectangle): void {
        const area = rectangle.width * rectangle.height;
        console.log(`Area of rectangle: ${area}`);
    }
}

class PerimeterVisitor extends ShapeVisitor {
    visitCircle(circle: Circle): void {
        const perimeter = 2 * Math.PI * circle.radius;
        console.log(`Perimeter of circle: ${perimeter}`);
    }
    visitRectangle(rectangle: Rectangle): void {
        const perimeter = 2 * (rectangle.width + rectangle.height);
        console.log(`Perimeter of rectangle: ${perimeter}`);
    }
}

class Circle {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    accept(visitor: ShapeVisitor): void {
        visitor.visitCircle(this);
    }
}

class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    accept(visitor: ShapeVisitor): void {
        visitor.visitRectangle(this);
    }
}

export { AreaVisitor, PerimeterVisitor, ShapeVisitor, Circle, Rectangle };
