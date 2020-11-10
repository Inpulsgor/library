const nav = document.querySelector('.js-nav');
nav.addEventListener('click', handleClick);

function handleClick(e) {
  e.preventDefault(); // клік по посиланню перезавантажує сторінку

  if (e.target === e.currentTarget) {
    return;
  }

  const currentLink = e.target;
  const activeLink = e.currentTarget.querySelector(".nav__link--active");

  if (activeLink) {
    activeLink.classList.remove("nav__link--active"); // знімає активний клас - якщо такий вже є
  }

  currentLink.classList.add("nav__link--active"); // додає активний клас
}
