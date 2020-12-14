// функция-помощник, которая возвращает массив обьектов такого формата, который ожидает компонент
const mapper = (articles) => {
  return articles.map(({ objectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props,
  }));
};

// Проверка массива на длину 
export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);
