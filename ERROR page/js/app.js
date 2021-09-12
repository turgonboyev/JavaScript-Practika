'use strict'

const btn = document.querySelector('button');
const loader = document.querySelector('.loader'),
  container = document.querySelector('.container');

loader.classList.add('hide');

function hide(){
  loader.classList.remove('hide');
  const time = setTimeout(() => {
    loader.classList.add('hide');
}, 2000);
}

  btn.addEventListener('click', hide());




// btn.addEventListener('click', () => {
//   loader.classList.remove('hide');
//   setTimeout(() => {
//     loader.classList.add('hide');
//   }, 3000);
// });