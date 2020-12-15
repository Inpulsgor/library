const hamburger = document.querySelector('.hamburger');

const setActiveClass = () => {
  hamburger.classList.toggle('active');
}

if(hamburger){
  hamburger.addEventListener('click', setActiveClass);
}

