const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');
const imagesUrl = images.flatMap(image => image.url);
const imagesAlt = images.flatMap(image => image.alt);

const itemsString = `<li><img src="${imagesUrl[0]}" alt="${imagesAlt[0]}" width="360"></li>
<li><img src="${imagesUrl[1]}" alt="${imagesAlt[1]}" width="360"></li>
<li><img src="${imagesUrl[2]}" alt="${imagesAlt[2]}" width="360"></li>`;
listEl.insertAdjacentHTML('afterbegin', itemsString);

const listItems = listEl.querySelectorAll('li');

for (const item of listItems) {
  item.classList.add('gallery__item');
  item.style.display = 'inline-flex';
};




