import Coffee from './coffee';
import { Cream, Sugar, Ice } from './decorators';

// Create a basic coffee
let myCoffee = new Coffee();
console.log(`Base amount: ${myCoffee.cost()}`);

// Add sugar
myCoffee = new Sugar(myCoffee);
console.log(`With sugar: ${myCoffee.cost()}`);

// Add cream
myCoffee = new Cream(myCoffee);
console.log(`With cream: ${myCoffee.cost()}`);

// Add ice
myCoffee = new Ice(myCoffee);
console.log(`With ice: ${myCoffee.cost()}`);
