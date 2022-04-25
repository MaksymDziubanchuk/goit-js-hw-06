const refs = {
    inputArea: document.querySelector('input#font-size-control'),
    text: document.querySelector('span#text'),

};

function onInputAreaInput(event) {
    const textSize = event.currentTarget.value;
    refs.text.style.fontSize = `${textSize}px`;
};

refs.inputArea.addEventListener('input', onInputAreaInput);
