const form = document.querySelector('#subscr-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const userNameField = document.querySelector('#user-name');
    const userEmailField = document.querySelector('#user-email');

    console.log('User name: ', userNameField.value);
    console.log('User email: ', userEmailField.value);
});

MicroModal.init();