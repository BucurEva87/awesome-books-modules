import utils from './utils.js';

export const displayContainer = utils.qs('.container');

export const populateBooks = (books) => {
  utils.qs('div', displayContainer)?.remove();
  const div = utils.createElement({});
  books.forEach((book) => {
    const wrapper = utils.createElement({});

    wrapper.appendChild(
      utils.createElement({
        tagName: 'p',
        textContent: `"${book.title}" by ${book.author}`,
        class: 'title',
      })
    );
    wrapper.appendChild(
      utils.createElement({
        tagName: 'button',
        type: 'button',
        class: 'remove',
        textContent: 'Remove',
      })
    );
    div.appendChild(wrapper);
  });
  displayContainer.appendChild(div);
};
