function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('div#controls > input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('div#boxes'),

};
let baseSize = 30;

const createBoxes = amount => {
  
  const boxesList = [];
  for (let i = 0; i <= (amount - 1); i += 1){
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${baseSize + i*10}px`;
    box.style.height = `${baseSize + i*10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesList.push(box);
    
  };
  baseSize += boxesList.length * 10;
  refs.boxes.append(...boxesList);
};

const onCreateBtnClick = event => {
  const amount = Number(refs.inputEl.value);
  createBoxes(amount);
};

const onDestroyBtnClick = event => {
  refs.boxes.innerHTML = '';
  baseSize = 30;
  refs.inputEl.value = 0;
};

refs.createBtn.addEventListener('click', onCreateBtnClick);

refs.destroyBtn.addEventListener('click', onDestroyBtnClick);




