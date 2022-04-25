const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients');

const makeElement = (ingredients) => {
  return ingredients.map(ingredient => {
    const itemEL = document.createElement('li');
    itemEL.textContent = ingredient;
    itemEL.classList.add('item');
    return itemEL;
  })
};

const itemsEl = makeElement(ingredients);

list.append(...itemsEl);




