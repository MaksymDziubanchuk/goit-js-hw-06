const refs = {
    decBtn: document.querySelector('button[data-action="decrement"]'),
    incBtn: document.querySelector('button[data-action="increment"]'),
    counterValue: document.querySelector('span#value'),
};

let value = 0;


function onDecDtnClick(event) {
    value += 1;
    refs.counterValue.textContent = value;
};

function onIncDtnClick(event) {
    value -= 1;
    refs.counterValue.textContent = value;
};

refs.decBtn.addEventListener('click', onDecDtnClick);

refs.incBtn.addEventListener('click', onIncDtnClick);
