const refs = {
    nameInput: document.querySelector('input#name-input'),
    name: document.querySelector('span#name-output'),

};

const defaultValue = 'Anonimus';

refs.nameInput.addEventListener('input', onNameInputInput);

function onNameInputInput(event) {
    if (event.currentTarget.value === '' || event.currentTarget.value === ' ') {
        refs.name.textContent = defaultValue;
    } else {
        refs.name.textContent = event.currentTarget.value;
    }
};

