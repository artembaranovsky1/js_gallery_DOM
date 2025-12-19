'use strict';

const items = document.querySelectorAll('#thumbs a');
const largePicture = document.querySelector('#largeImg');

for (const item of items) {
  item.addEventListener('click', (ev) => {
    ev.preventDefault();
    largePicture.src = `${item.href}`;
  });
}
