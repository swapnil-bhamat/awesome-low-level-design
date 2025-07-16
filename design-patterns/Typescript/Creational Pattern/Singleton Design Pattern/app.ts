import Singleton from './singleton';

const Singleton1 = Singleton.getInstance();
const Singleton2 = Singleton.getInstance();

Singleton1.increment();

console.log(Singleton1.getData());
console.log(Singleton2.getData());

console.log(Singleton1 === Singleton2); // True
