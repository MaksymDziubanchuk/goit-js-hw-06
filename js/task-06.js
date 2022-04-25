const refs = {
    inputArea: document.querySelector('input#validation-input'),

};



function onInputAreaBlur(event) {
    if (event.currentTarget.value.length == Number(refs.inputArea.dataset.length)) {
        refs.inputArea.classList.add('valid');
    } else {
        refs.inputArea.classList.add('invalid');
    };
};
refs.inputArea.addEventListener('blur', onInputAreaBlur);
