import { ModernFurnitureFactory, ClassicFurnitureFactory } from './abstract';

// Example usage
const modernFactory = new ModernFurnitureFactory();
const classicFactory = new ClassicFurnitureFactory();

const modernChair = modernFactory.createChair();
const modernSofa = modernFactory.createSofa();
modernChair.sitOn();
modernSofa.lieOn();

const classicChair = classicFactory.createChair();
const classicSofa = classicFactory.createSofa();
classicChair.sitOn();
classicSofa.lieOn();
