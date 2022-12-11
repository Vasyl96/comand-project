/*
  |==============================
  | Mobile menu script
  |==============================
*/

(() => {
  const navOpenBtn = document.querySelector('[data-menu-open]');
  const navCloseBtn = document.querySelector('[data-menu-close]');
  const navMobile = document.querySelector('[data-nav-mobile]');

  navOpenBtn.addEventListener('click', toggleNav);
  navCloseBtn.addEventListener('click', toggleNav);

  function toggleNav() {
    navMobile.classList.toggle('is-open');
  }
})();