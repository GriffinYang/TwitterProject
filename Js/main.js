const screenHeight = window.screen.height;
const side_bar = document.querySelector('.side-bar');
const functions = document.querySelector('.functions');
const account = document.querySelector('.account');
const info = document.querySelector('.info');
const logo = document.querySelector('.logo');
const user = document.querySelector('.img-01');
side_bar.style.height = screenHeight + 'px';
let percentage =
  1 - (getHeight(account) + getHeight(info)) / getHeight(side_bar) - 0.2;
functions.style.height = getHeight(side_bar) * percentage + 'px';
logo.addEventListener('click', () => {
  side_bar.classList.toggle('translate');
});
user.addEventListener('click', () => {
  side_bar.classList.toggle('translate');
});
//Functions
function getHeight(ele) {
  let height = getComputedStyle(ele).height.replace(/px/g, '');
  return parseInt(height);
}
