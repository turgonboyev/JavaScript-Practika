'use strict';

const day = document.querySelector('.days'),
  hour = document.querySelector('.hours'),
  minut = document.querySelector('.minutes'),
  second = document.querySelector('.seconds');

setInterval(() => {
const data = new Date(),
  deadline = new Date(new Date().getFullYear() +1, 0, 1);

var seconds = Math.floor((deadline - (data))/1000);
var minutes = Math.floor(seconds/60);
var hours = Math.floor(minutes/60);
var days = Math.floor(hours/24);

hours = hours-(days*24);
minutes = minutes-(days*24*60)-(hours*60);
seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

  day.textContent = days;
  hour.textContent = hours;
  minut.textContent = minutes
  second.textContent = seconds;
})