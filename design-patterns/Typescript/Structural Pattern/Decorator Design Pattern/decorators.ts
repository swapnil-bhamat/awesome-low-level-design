import Coffee from './coffee';

// Abstract Decorator class
abstract class CoffeeDecorator extends Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        super();
        this.coffee = coffee;
    }

    abstract cost(): number;
}

// Concrete Decorators
class Cream extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 5; // Add cost of cream
    }
}

class Sugar extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 2; // Add cost of sugar
    }
}

class Ice extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 1; // Add cost of ice
    }
}

export { Cream, Sugar, Ice };
