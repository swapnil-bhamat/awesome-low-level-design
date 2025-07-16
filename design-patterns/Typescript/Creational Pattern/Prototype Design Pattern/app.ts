import Car from './car';

const prototypeCar = new Car('Mustang', 2019, 'red');

const cloneCar1 = prototypeCar.clone();
cloneCar1.color = 'blue';

const cloneCar2 = prototypeCar.clone();
cloneCar2.color = 'green';

console.log(prototypeCar.getDetails());
console.log(cloneCar1.getDetails());
console.log(cloneCar2.getDetails());
