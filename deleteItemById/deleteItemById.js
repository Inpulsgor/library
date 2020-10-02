<li class="list__item" data-id="id">
  <div class="item">
    <p class="item__text">text</p>
    <div class="item__actions">
      <button class="button" type="button">
        delete
      </button>
    </div>
  </div>
</li>;


function handleDeleteItem(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const button = e.target;
  const parentLi = button.closest('li.list__item');
  const itemID = Number(parentLi.dataset.id);

  item.delete(itemID); // some method for deleting item object from array
  parentLi.remove(); // delete item from DOM
}
