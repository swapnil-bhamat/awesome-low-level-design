abstract class Iterator<T> {
    abstract next(): T | undefined;
    abstract hasNext(): boolean;
}

class LibraryIterator extends Iterator<string> {
    private collection: string[];
    private index: number = 0;

    constructor(collection: string[]) {
        super();
        this.collection = collection;
    }

    hasNext(): boolean {
        return this.index < this.collection.length;
    }

    next(): string | undefined {
        console.log('Current index: ' + this.index);
        return this.collection[this.index++];
    }
}

export { Iterator, LibraryIterator };
