import { Image } from './image';
import { RealImage } from '../../../typescript/structural/proxy/realImage';

export class ProxyImage implements Image {
    private fileName: string;
    private realImage: RealImage | null = null;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    public display(): void {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
}
