const refs = {
    loginForm: document.querySelector('.login-form'),
    emailInput: document.querySelector('input[name="email"]'),
    passwordlInput: document.querySelector('input[name="password"]'),

};

refs.loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email.length === 0 || password.length === 0) {
        alert('Все поля должны быть заполнены!');
    } else {
        console.log({email, password});
        event.currentTarget.reset();
    };
   
};

