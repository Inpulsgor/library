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

// visually hidden
@mixin visually-hidden {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
}

```
