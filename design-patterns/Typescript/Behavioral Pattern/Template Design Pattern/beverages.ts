abstract class Food {
    prepareFood(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
        this.noNeedVegetables();
    }

    boilWater(): void {
        console.log('Boiling the water...');
    }
    abstract brew(): void;

    pourInCup(): void {
        console.log('Pouring into cup...');
    }
    abstract addCondiments(): void;

    // private method
    private noNeedVegetables(): void {
        if (this.shouldAddVegetables()) {
            this.addVegetables();
        }
    }

    protected addVegetables(): void {
        console.log('No vegetables added here!');
    }

    protected shouldAddVegetables(): boolean {
        return false;
    }
}

export default Food;
