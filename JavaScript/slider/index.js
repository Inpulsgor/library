const list = document.querySelector(".list");
const getMore = document.querySelector(".getMore");
const data = {
  page: 1,
  currentIndex: 0,
  countElements: 2,
  items: [],
};
const array = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
  { name: "G" },
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
  { name: "G" },
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
  { name: "G" },
];
const getContent = (array, countElements) => {
  const itemsLength = data.items.length;
  const result = array.slice(itemsLength, itemsLength + countElements);
  data.items = [...data.items, ...result];
};
const slider = (array, countElements) => {
  data.items = array.slice(
    data.currentIndex,
    data.currentIndex + countElements
  );
  data.currentIndex += countElements;
};
getMore.addEventListener("click", () => slider(array, 1));
