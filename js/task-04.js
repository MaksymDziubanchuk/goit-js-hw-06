const refs = {
    decBtn: document.querySelector('button[data-action="decrement"]'),
    incBtn: document.querySelector('button[data-action="increment"]'),
    counterValue: document.querySelector('span#value'),
};


function onDecDtnClick(event) {
    refs.counterValue.textContent = (Number(refs.counterValue.textContent) - 1);
};

function onIncDtnClick(event) {
    refs.counterValue.textContent = (Number(refs.counterValue.textContent) + 1);
};

refs.decBtn.addEventListener('click', onDecDtnClick);

refs.incBtn.addEventListener('click', onIncDtnClick);
