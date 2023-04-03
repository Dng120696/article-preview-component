'use strict';

const btnArrow = document.querySelector('.btn-arrow');
const box = document.querySelector('.box');


btnArrow.addEventListener('click', () =>{

  btnArrow.classList.toggle('btn-clicked');
  box.classList.toggle('hidden');
});