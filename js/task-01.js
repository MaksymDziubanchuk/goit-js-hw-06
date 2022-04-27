const list = document.querySelector('ul#categories');

const listItems = list.children;
console.log('Number of categories:', listItems.length);
console.log('');

// for (const item of listItems) {
//     console.log('Category:', item.querySelector('h2').textContent);
//     console.log('Elements:', item.querySelectorAll('li').length);
//     console.log('');
// };


Array.prototype.map.call(listItems, item => {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
    console.log('');
});
