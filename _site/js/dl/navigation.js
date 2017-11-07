// ***MENU
var menuBtn = document.querySelector('.navigation__btn'),
    spans = menuBtn.getElementsByTagName('span'),
    menu = document.querySelector('.menu'),
    navigation = document.querySelector('.navigation');
// open menu after click in menu button
menuBtn.addEventListener('click', function (event) {
  event.stopPropagation();
  menu.classList.toggle('active');
  navigation.classList.toggle('visible-mobile');
  for (i = 0; i<spans.length; i++) {
    spans[i].classList.toggle('active');
  }
}, false);
// close menu after click somewhere
document.addEventListener('click', function () {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    navigation.classList.remove('visible-mobile');
    for (i = 0; i<spans.length; i++) {
      spans[i].classList.remove('active');
    }
  }
}, false);

// ***NAV
// navigation after scroll
window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 100) {
    navigation.classList.add('visible-scroll');
  } else {
    navigation.classList.remove('visible-scroll');
    }
}, false);
