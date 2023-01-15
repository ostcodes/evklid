const swiper = new Swiper('.swiper', {
  loop: true,
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  }
});

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

function() {

burger.classList.toggle('burger--active');

menu.classList.toggle('header__nav--active');

document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function(){

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  });
});

let tabsBtn = document.querySelectorAll('.steps__link');
let tabsItem = document.querySelectorAll('.info__content');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('steps__link--active')});
    e.currentTarget.classList.add('steps__link--active');

    tabsItem.forEach(function(element){ element.classList.remove('info__content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('info__content--active');
  });
});

let searchBtn = document.querySelector('.header__search');
let searchField = document.querySelector('.header__form');
let searchBtnField = searchField.querySelectorAll('.form__button');

searchBtn.addEventListener('click', function(){

  searchBtn.classList.add('header__search--active');
  searchField.classList.add('header__form--active');

});

searchBtnField.forEach(function(el){
  el.addEventListener('click', () => {
      searchField.classList.remove('header__form--active');
      searchBtn.classList.remove('header__search--active');
    });
});




