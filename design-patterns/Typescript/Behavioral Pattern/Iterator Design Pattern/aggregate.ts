import { LibraryIterator } from './iterator';
import Book from './book';

abstract class Aggregate {
    abstract createIterator(): LibraryIterator;
}

class ConcreteAggregate extends Aggregate {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    createIterator(): LibraryIterator {
        return new LibraryIterator(this.books.map(book => book.getDetails()));
    }
}

export default ConcreteAggregate;
