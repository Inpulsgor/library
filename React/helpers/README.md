## функция-помощник, которая возвращает массив обьектов такого формата, который ожидает компонент

```js
const mapper = (articles) => {
  return articles.map(({ objectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props,
  }));
};
```
