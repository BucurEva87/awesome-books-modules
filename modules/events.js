import utils from './utils.js';
import books from './Books.js';
import { displayContainer, populateBooks } from './populateBooks.js';

export const addRemoveEvents = () => {
  displayContainer.addEventListener('click', (e) => {
    const { target } = e;

    if (!target.classList.contains('remove')) return;

    const title = utils.qs('p.title', target.parentElement).textContent;

    books.remove(title.match(/^"(.+?)"/)[0].replaceAll('"', ''));

    if (!books.books.length) {
      utils.qs('#booklist .container > div').remove();
    } else {
      populateBooks(books.books);
    }
  });
};

export const addSubmitEvent = () => {
  utils.qs('form').addEventListener('submit', (e) => {
    const title = utils.qs('.title', e.target);
    const author = utils.qs('.author', e.target);

    e.preventDefault();

    if (!title.value.trim().length || !author.value.trim().length) return;

    books.add({
      title: title.value,
      author: author.value,
    });
    populateBooks(books.books);
    e.target.reset();

    utils.qs('header li a').click();
  });
};

export const addClickEvents = () => {
  utils.qs('header').addEventListener('click', (e) => {
    e.preventDefault();

    const { target } = e;

    if (target.tagName !== 'A') return;

    const index = Array.prototype.indexOf.call(
      target.parentNode.parentNode.children,
      target.parentNode
    );
    utils.qsa('.pages section').forEach((e, i) => {
      if (i === index) {
        e.classList.remove('hidden');
        return;
      }

      e.classList.add('hidden');
    });
  });
};
