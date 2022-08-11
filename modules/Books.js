import LS from './Localstorage.js';

class Books {
  books = LS.read('books') || [];

  add(book) {
    this.books.push(book);
    LS.write('books', this.books);
  }

  remove(title) {
    this.books.splice(this.findIndexByTitle(title), 1);
    LS.write('books', this.books);
  }

  findIndexByTitle(title) {
    return this.books.findIndex((b) => b.title === title);
  }
}

export const books = new Books();
