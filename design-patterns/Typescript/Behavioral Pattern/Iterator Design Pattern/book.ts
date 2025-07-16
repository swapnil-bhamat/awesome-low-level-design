class Book {
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    getDetails(): string {
        return `${this.title} by ${this.author}`;
    }
}

export default Book;
