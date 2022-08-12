//codigo para el preloader
window.addEventListener('load', () => {
  let container_loader = document.getElementById('loader');
  container_loader.style.opacity = 0;
  container_loader.style.visibility = 'hidden';
});


//scroll header
window.addEventListener('scroll', () => {
  let header = document.getElementById('header-scroll');
  header.classList.toggle('header-scroll',window.scrollY > 0);
});

//menu movile 

addEventListener ('DOMContentLoaded', () => {
  const btn_bar = document.getElementById('btn__home');
  if (btn_bar) {
    btn_bar.addEventListener('click', () => {
      const bar_menu = document.getElementById('menu__bars');
      bar_menu.classList.toggle('menu__show');
    });
  }
});