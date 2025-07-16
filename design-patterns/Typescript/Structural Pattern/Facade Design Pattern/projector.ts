class Projector {
    on(): void {
        console.log("Projector on");
    }

    connect(source: string): void {
        console.log(`Connecting projector to ${source}`);
    }

    off(): void {
        console.log("Projector off");
    }
}

export default Projector;
