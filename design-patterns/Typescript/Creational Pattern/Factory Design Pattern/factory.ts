import { CheesePizza, PepperoniPizza, Pizza } from './pizza';

class PizzaFactory {
    static createPizza(pizzaType: string): Pizza {
        if (pizzaType === 'cheese') {
            return new CheesePizza();
        } else if (pizzaType === 'pepperoni') {
            return new PepperoniPizza();
        } else {
            throw new Error('Invalid pizza type');
        }
    }
}

export default PizzaFactory;
