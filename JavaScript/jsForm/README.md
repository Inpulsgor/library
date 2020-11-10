```js
const form = document.querySelector(".js-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const nameInput = form.elements.name;
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  const data = {
    [nameInput.name]: nameInput.value,
    [emailInput.name]: emailInput.value,
    [passwordInput.name]: passwordInput.value,
  };
}
```
