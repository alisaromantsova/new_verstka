const form = document.querySelector('#subscr-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const userNameField = document.querySelector('#user-name');
    const userEmailField = document.querySelector('#user-email');

    console.log('User name: ', userNameField.value);
    console.log('User email: ', userEmailField.value);
});

const sliderContainer = document.querySelector('#splide');

const slider = new Splide(sliderContainer).mount();

let currentImageIndex = 0;

const galleryButtons = document.querySelectorAll('.gallery-btn');

galleryButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const selectedImageIndex = button.getAttribute('data-index');

        currentImageIndex = Number(selectedImageIndex) - 1;
    });
});

MicroModal.init({
    onShow: function () {
        slider.go(currentImageIndex);
    }
});