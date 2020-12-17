const circle = document.querySelector('.js-circle-inner');
const line = document.querySelector('.js-line-inner');

const progressLine = () => {
  // line
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  const progressPercentage = Math.floor(scrollTop / (pageHeight - windowHeight) * 100);

  line.style.width = `${progressPercentage}%`

  // circle
  const radius = circle.getAttribute('r');
  const circleLength = 2 * Math.PI * radius;

  circle.setAttribute('stroke-dasharray', circleLength);
  circle.setAttribute('stroke-dashoffset', circleLength - circleLength * progressPercentage / 100)
}

window.addEventListener('scroll', progressLine)
