```js
// функция-помощник, которая возвращает массив обьектов такого формата, который ожидает компонент

const mapper = (articles) => {
  return articles.map(({ objectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props,
  }));
};

// usage example
componentDidMount() {
    axios.get(BASE_URL).then(response => this.setState({ articles: mapper(response.data.hits)})).catch(console.log);
}

```

```js
// Проверка массива на длину 

export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);
```

```js
// Проверка браузера
export const browser = (function () {
  const test = regexp => regexp.test(window.navigator.userAgent);

  switch (true) {
    case test(/edg/i):
      return 'Microsoft Edge';
    case test(/trident/i):
      return 'Microsoft Internet Explorer';
    case test(/firefox|fxios/i):
      return 'Mozilla Firefox';
    case test(/opr\//i):
      return 'Opera';
    case test(/ucbrowser/i):
      return 'UC Browser';
    case test(/samsungbrowser/i):
      return 'Samsung Browser';
    case test(/chrome|chromium|crios/i):
      return 'Google Chrome';
    case test(/safari/i):
      return 'Apple Safari';
    default:
      return 'Other';
  }
})();
```
