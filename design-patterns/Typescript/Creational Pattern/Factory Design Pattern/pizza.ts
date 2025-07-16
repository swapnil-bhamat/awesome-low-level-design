abstract class Pizza {
    abstract prepare(): void;

    bake(): void {
        console.log("Baking for 25 minutes");
    }

    cut(): void {
        console.log("Cutting the pizza");
    }

    box(): void {
        console.log("Boxing the pizza");
    }
}

class CheesePizza extends Pizza {
    prepare(): void {
        console.log("Preparing cheese pizza");
    }
}

class PepperoniPizza extends Pizza {
    prepare(): void {
        console.log("Preparing pepperoni pizza");
    }
}

export { CheesePizza, PepperoniPizza, Pizza };
