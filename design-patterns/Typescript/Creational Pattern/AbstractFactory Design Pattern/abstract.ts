// Abstract product
abstract class Chair {
    abstract sitOn(): void;
}

abstract class Sofa {
    abstract lieOn(): void;
}

// Concrete product for modernStyle
class ModernChair extends Chair {
    sitOn(): void {
        console.log("Sitting on modern chair");
    }
}

class ModernSofa extends Sofa {
    lieOn(): void {
        console.log("Lying on modern sofa");
    }
}

// Concrete product for classicStyle
class ClassicChair extends Chair {
    sitOn(): void {
        console.log("Sitting on classic chair");
    }
}

class ClassicSofa extends Sofa {
    lieOn(): void {
        console.log("Lying on classic sofa");
    }
}

// Abstract factory
abstract class FurnitureFactory {
    abstract createChair(): Chair;
    abstract createSofa(): Sofa;
}

// Concrete factory for modernStyle
class ModernFurnitureFactory extends FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }
    createSofa(): Sofa {
        return new ModernSofa();
    }
}

// Concrete factory for classicStyle
class ClassicFurnitureFactory extends FurnitureFactory {
    createChair(): Chair {
        return new ClassicChair();
    }
    createSofa(): Sofa {
        return new ClassicSofa();
    }
}

export { ModernFurnitureFactory, ClassicFurnitureFactory, Chair, Sofa };
