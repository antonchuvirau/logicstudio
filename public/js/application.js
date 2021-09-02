
'use strict';

function onDocumentClickHandler(evt) {
  const target = evt.target;

  if (target.matches(`.header__menu-button-input`)) {
    if (target.checked) {
      const menu = document.querySelector('.menu');
      menu.classList.add('menu_opened');
      document.documentElement.classList.add(`is-locked`);
    }
    else {
      const menu = document.querySelector('.menu');
      menu.classList.remove('menu_opened');
      document.documentElement.classList.remove(`is-locked`);
    }
  }
}

document.addEventListener(`click`, onDocumentClickHandler);