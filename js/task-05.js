const refs = {
    nameInput: document.querySelector('input#name-input'),
    name: document.querySelector('span#name-output'),

};

refs.nameInput.addEventListener('input', onNameInputInput);

function onNameInputInput(event) {
    refs.name.textContent = event.currentTarget.value;
};

