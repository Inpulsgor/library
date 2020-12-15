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

  <div class="hamburger">
    <div></div>
    <div></div>
    <div></div>
  </div>
  
  <script src="main.js"></script>
</body>
</html>
```

## styles.css

```css
:root {
	--size: 100px;
	--line-item: 10px;
	--translate: calc( var(--size) / 2 - var(--line-item) / 2 );
	--color: #ffa500;
}
body {
	display: flex;
	height: 100vh;
	margin: 0;
	padding: 0;
}
.hamburger {
	width: var(--size);
	height: var(--size);
	display: flex;
	align-content: space-between;
	flex-wrap: wrap;
	cursor: pointer;
	margin: auto;
}
.hamburger div {
	width: 100%;
	height: var(--line-item);
	background: var(--color);
	border-radius: 5px;
	transition: 0.3s;
}
.active > div:nth-child(1) {
	transform: translateY(var(--translate)) rotate(-45deg);
}
.active > div:nth-child(3) {
	transform: translateY(calc(var(--translate) * -1)) rotate(45deg);
}
.active > div:nth-child(2) {
	opacity: 0;
}
```

## main.js

```js
const hamburger = document.querySelector('.hamburger');

const setActiveClass = () => {
  hamburger.classList.toggle('active');
}

if(hamburger){
  hamburger.addEventListener('click', setActiveClass);
}
```
