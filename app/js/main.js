'use strict';

const workLinks = document.querySelectorAll('.our-works__work');

workLinks.forEach(link => {
  link.onpointerover = evt => {
    const additionalNote = evt.target.querySelector('.our-works__work-link');
    additionalNote.classList.remove('our-works__work-link_hidden');
  };
  link.onpointerleave = evt => {
    const additionalNote = evt.target.querySelector('.our-works__work-link');
    additionalNote.classList.add('our-works__work-link_hidden');
  }
})