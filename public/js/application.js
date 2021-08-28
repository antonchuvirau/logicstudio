
'use strict';

//Показывает ссылку "Подробнее" на некоторых элементах
const workLinks = document.querySelectorAll('.our-works__work');

workLinks.forEach(link => {
  link.onpointerover = (evt) => {
    const additionalNote = evt.target.querySelector('.our-works__work-link');
    additionalNote.classList.remove('our-works__work-link_hidden');
  };
  link.onpointerleave = evt => {
    const additionalNote = evt.target.querySelector('.our-works__work-link');
    additionalNote.classList.add('our-works__work-link_hidden');
  }
})

//Открывает и закрывает меню
const menu = document.querySelector('.menu');
const toggleMenuBtn = document.querySelector('.header__menu');

toggleMenuBtn.onclick = (evt) => {
  menu.classList.toggle('menu_opened');
}