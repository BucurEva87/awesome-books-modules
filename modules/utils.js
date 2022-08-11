export default {
  createElement: (obj) => {
    const element = document.createElement(obj.tagName ? obj.tagName : 'div');
    delete obj.tagName;

    // Itterate through each property of the obj and set it as a
    // property of the element
    Object.entries(obj).forEach(([prop, value]) => {
      if (prop === 'class') {
        if (typeof value === 'object') {
          element.classList.add(...value);
        } else {
          element.classList.add(value);
        }
      } else if (prop === 'data' && typeof value === 'object') {
        Object.entries(value).forEach(([prop, value]) => {
          element.dataset[prop] = value;
        });
      } else {
        element[prop] = value;
      }
    });

    return element;
  },

  qs: (selector = '*', element = document) => element.querySelector(selector),

  qsa: (selector = '*', element = document) => [
    ...element.querySelectorAll(selector),
  ],
};
