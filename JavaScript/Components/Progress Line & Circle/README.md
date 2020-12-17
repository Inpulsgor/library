## main.js

```js

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

```

## index.html

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Document</title>
</head>
<body>

  <!-- Circle -->
  <svg class="progress-circle" viewBox="-10 -10 300 300">
		<circle class="progress-circle__inner js-circle-inner" r="140" cx="140" cy="140" fill="none" stroke="crimson" stroke-width="20"></circle>
	</svg>

  <!-- Line -->
  <div class="progress-line">
		<div class="progress-line__inner js-line-inner"></div>
	</div>

  <header class="header section"></header>
  <main class="main">
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
  </main>
  <footer class="footer section"></footer>

  <script src="main.js"></script>
</body>
</html>

```

### styles.css

```css

* {
	box-sizing: border-box;
}

body {
	margin: 0;
	padding: 0;
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
}

.section {
  width: 100%;
  min-height: 1000px;
}

.header,
.footer {
  width: 100%;
  min-height: 100px;
}

.progress-circle {
	position: fixed;
	right: 30px;
	bottom: 30px;
	z-index: 1000;
	width: 50px;
}

.progress-line {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 5px;
  background-color: #f5f5f5;
}

.progress-line__inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: crimson;
}

```
