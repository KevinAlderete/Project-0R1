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

