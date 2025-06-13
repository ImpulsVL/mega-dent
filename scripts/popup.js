document.addEventListener('DOMContentLoaded', function () {
    const callbackButtons = document.querySelectorAll('.header__buttonPhone, .med__button');
    const popup = document.getElementById('callbackPopup');
    const closeButton = document.querySelector('.popup__close');

    function openPopup() {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    }

    callbackButtons.forEach(button => {
        button.addEventListener('click', openPopup);
    });

    closeButton.addEventListener('click', closePopup);

    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            closePopup();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });

    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            e.target.value = !x[2] ? x[1] : '+7 (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
        });
    }
});