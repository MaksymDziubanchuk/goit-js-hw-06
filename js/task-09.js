function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs= {
  colorName: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
  plaseToChange: document.querySelector('body'),

};

refs.changeColorBtn.addEventListener('click', onChangeColorDtnClick);

function onChangeColorDtnClick (event) {
  const colorBody = getRandomHexColor()
  refs.plaseToChange.style.backgroundColor = colorBody;
  refs.colorName.textContent = colorBody;

};


