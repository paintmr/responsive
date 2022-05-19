//Select element function
const selectElement = function (element) {
  return document.querySelector(element);
}

// Click the right-top button to show/ hide Nav menu
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
let navList = selectElement('.nav-list');
let timer = null;

menuToggler.addEventListener('click', function () {
  if (body.className === 'open') {
    // Nav-list is open. Remove .open Class first, then .nav-list-trans Class
    clearTimeout(timer);
    body.classList.remove('open');
    timer = setTimeout(() => {
      navList.classList.remove('nav-list-trans');
      clickable = false;
    }, 600);
  } else {
    // Nav-list is closed. Add .nav-list-trans Class first, then .open Class
    clearTimeout(timer);
    navList.classList.add('nav-list-trans');
    body.classList.add('open');

  }

  // 原本导师代码只有这一行。如果这样写，屏幕小于900的时候，nav-list导航栏会显示再隐藏，影响用户体验。
  // body.classList.toggle('open');

})

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
})