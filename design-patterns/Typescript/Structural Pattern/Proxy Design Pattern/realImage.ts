import { Image } from './image';

export class RealImage implements Image {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
        this.loadFromDisk();
    }

    private loadFromDisk(): void {
        console.log(`Loading image from disk: ${this.fileName}`);
    }

    public display(): void {
        console.log(`Displaying image: ${this.fileName}`);
    }
}
