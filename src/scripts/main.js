'use strict';

const items = document.querySelectorAll('.list-item__link');
const largePicture = document.querySelector('#largeImg');

for (const item of items) {
  item.addEventListener('click', () => {
    event.preventDefault();
    largePicture.src = `${item.href}`;
  });
}
