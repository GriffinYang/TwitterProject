const screenHeight = window.screen.height;
const side_bar = document.querySelector('.side-bar');
const functions = document.querySelector('.functions');
const account = document.querySelector('.account');
const info = document.querySelector('.info');
const logo = document.querySelector('.logo');
const user = document.querySelector('.img-01');
const mainFrame = document.querySelector('iframe');
const topBar = document.querySelector('.topbar');
const bottomBar = document.querySelector('.bottom-bar');
const input = document.querySelector('#search');
const searchLeft = document.querySelector('.searchbar > span > img');
const buttonIcon = document.querySelectorAll('.bottom-icon');
const cardImg = document.querySelector('.card-img');
side_bar.style.height = screenHeight + 'px';
let percentage =
  1 - (getHeight(account) + getHeight(info)) / getHeight(side_bar) - 0.2;
functions.style.height = getHeight(side_bar) * percentage + 'px';
let frameHeight =
  screenHeight - getHeight(topBar) - getHeight(bottomBar) + 'px';
mainFrame.style.height = frameHeight;
// cardImg.style.height = getHeight(document.querySelector('.card'));
logo.addEventListener('click', () => {
  side_bar.classList.toggle('translate');
});
user.addEventListener('click', () => {
  side_bar.classList.toggle('translate');
});
input.addEventListener('focus', () => {
  input.classList.add('input-on-input');
  searchLeft.classList.add('search-left');
});
input.addEventListener('blur', () => {
  input.classList.remove('input-on-input');
  searchLeft.classList.remove('search-left');
});
for (let i = 0; i < buttonIcon.length; i++) {
  buttonIcon[i].addEventListener('click', (e) => {
    for (let j = 0; j < buttonIcon.length; j++) {
      let src;
      if (buttonIcon[j].children[0].src.indexOf('inactive') === -1) {
        src = buttonIcon[j].children[0].src.replace(/active/g, 'inactive');
        buttonIcon[j].children[0].src = src;
      }
    }
    let change = e.target.src.replace(/inactive/g, 'active');
    e.target.src = change;
    if (e.target === buttonIcon[0].children[0]) {
      mainFrame.src = 'content.html';
      document.querySelector('.twitter-logo').classList.remove('hidden');
      document.querySelector('.searchbar').classList.add('hidden');
      document.querySelector('.content-top-img').classList.remove('hidden');
      document.querySelector('.discover-top-img').classList.add('hidden');
    } else if (e.target === buttonIcon[1].children[0]) {
      mainFrame.src = 'discover.html';
      document.querySelector('.twitter-logo').classList.add('hidden');
      document.querySelector('.searchbar').classList.remove('hidden');
      document.querySelector('.discover-top-img').classList.remove('hidden');
      document.querySelector('.content-top-img').classList.add('hidden');
    }
  });
}
//Functions
function getHeight(ele) {
  let height = getComputedStyle(ele).height.replace(/px/g, '');
  return parseInt(height);
}
