import ConcreteAggregate from './aggregate';
import Book from './book';

const library = new ConcreteAggregate();
library.addBook(new Book('To Kill a Mockingbird', 'Harper Lee'));
library.addBook(new Book('1984', 'George Orwell'));
library.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald'));
library.addBook(new Book('Moby Dick', 'Herman Melville'));

const iterator = library.createIterator();

while (iterator.hasNext()) {
    const book = iterator.next();
    console.log(book);
}
