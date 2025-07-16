class Snacks {
    noteOrder(snacks: string): void {
        console.log(`Ordering ${snacks}`);
    }

    prepare(): void {
        console.log("Preparing snacks 🍿");
    }

    serve(snacks: string): void {
        console.log(`Here is your ${snacks} sir!, enjoy your movie 😊`);
    }
}

export default Snacks;
