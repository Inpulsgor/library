## main.scss

```scss
@import "./helpers/normalize";
@import "./helpers/placeholders";
@import "./helpers/variables";
@import "./helpers/mixins";
@import "./helpers/fonts";
@import "./helpers/base";

// MAIN PAGE
@import "./components/;
@import "./components/;
@import "./components/;
// SECOND PAGE
@import "./components/;
@import "./components/;
@import "./components/;
```

## _fonts.scss

```scss
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'), local('Roboto-Light'),
    url('../fonts/roboto-v20-latin-300.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('../fonts/roboto-v20-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
```

## _base.scss

```scss
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-anchor: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

​img {
  max-width: 100%;
  display: block;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  margin: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button:hover {
  cursor: pointer;
}

button:focus {
  outline: none;
}

input:focus,
input:active,
button:active,
button:focus {
  outline: none;
}

button:disabled,
button[disabled] {
  background-color: #cccccc;
  color: #fff;
}

input:focus:invalid {
  border: 1px solid #ff0000;
}

input:focus:valid {
  border: 1px solid #008600;
}

// container
.container {
  margin: 0 auto;
  padding: 0 50px;
  max-width: 100%;

  @include for-phone-xs {
    width: 100%;
  }

  @include for-phone-sm {
    width: 540px;
  }

  @include for-tablet-md {
    width: 720px;
  }

  @include for-desktop-lg {
    width: 960px;
  }

  @include for-desktop-xl {
    width: 1140px;
  }
}

// custom 
.visually-hidden:not(:focus):not(:active),
input[type='checkbox'].visually-hidden,
input[type='radio'].visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;

  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
}

.stop-scroll {
  @include stop-scroll;
}

```

## _mixins.scss

```scss
@mixin for-phone-xs {
  @media (max-width: 575px) {
    @content;
  }
}

@mixin for-phone-sm {
  @media (min-width: 576px) {
    @content;
  }
}

@mixin for-tablet-md {
  @media (min-width: 768px) {
    @content;
  }
}

@mixin for-desktop-lg {
  @media (min-width: 992px) {
    @content;
  }
}

@mixin for-desktop-xl {
  @media (min-width: 1200px) {
    @content;
  }
}

// font
@mixin font($ff: 'Raleway', $fw: 400, $fs: 16px, $lh: 1.2, $color: inherit) {
  font-family: $ff;
  font-weight: $fw;
  font-size: $fs;
  line-height: $lh;
  color: $color;
}

// font size (rem)
@function rem($px) {
  @return ($px / 16) + rem;
}

// font family
@mixin font-face($font-family, $url, $weight) {
  @font-face {
    font-family: "#{$font-family}";
    src: url("../../fonts/#{$url}.woff2") format("woff2");
    font-weight: #{$weight};
    font-display: swap;
    font-style: normal;
  }
}

// stop scroll
@mixin stop-scroll {
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

```

## brakepoints.scss

```
@mixin for-size($size) {
  @if $size == phone-only {
    @media (max-width: 599px) { @content; }
  } @else if $size == tablet-portrait-up {
    @media (min-width: 600px) { @content; }
  } @else if $size == tablet-landscape-up {
    @media (min-width: 900px) { @content; }
  } @else if $size == desktop-up {
    @media (min-width: 1200px) { @content; }
  } @else if $size == big-desktop-up {
    @media (min-width: 1800px) { @content; }
  }
}

// usage
.my-box {
  padding: 10px;
  
  @include for-size(desktop-up) {
    padding: 20px;
  }
}

```
