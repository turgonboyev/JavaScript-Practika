'use strict';

window.addEventListener('DOMContentLoaded', () => {
  
  
const btns = document.querySelectorAll('.tabheader__item'),
btnFather = document.querySelector('.tabheader__items'),
tabContent = document.querySelectorAll('.tabcontent');

// hide function
function hideTab(){
tabContent.forEach(item => {
  item.classList.add('none');
  item.classList.remove('show', 'fade');
})
btns.forEach(item => {
  item.classList.remove('tabheader__item_active');
})
}

// show function
function showTab(i = 0){
  tabContent[i].classList.add('show', 'fade');
  tabContent[i].classList.remove('none');
  btns[i].classList.add('tabheader__item_active')
}

hideTab();
showTab();

btnFather.addEventListener('click', (event) => {
  if(event.target && event.target.classList.contains('tabheader__item')){
    btns.forEach((item, i) => {
      if(event.target == item){
        hideTab();
        showTab(i);
      }
    })
  }
})

})