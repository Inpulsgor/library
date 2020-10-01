```js
const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmitFormData);

function handleSubmitFormData(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = {};

  formData.forEach((name, value) => {
    data[name] = value;
  });
    
    return data;
}
```
