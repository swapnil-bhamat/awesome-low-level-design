import PizzaFactory from './factory';

const cheesePizza = PizzaFactory.createPizza('cheese');
cheesePizza.prepare();
cheesePizza.bake();
cheesePizza.cut();
cheesePizza.box();

const pepperoniPizza = PizzaFactory.createPizza('pepperoni');
pepperoniPizza.prepare();
pepperoniPizza.bake();
pepperoniPizza.cut();
pepperoniPizza.box();
