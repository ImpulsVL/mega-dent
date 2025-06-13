document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.header__linkIcon');
    const specHeader = document.querySelector('.specHeader');
    const menuClose = document.querySelector('.menu__close');

    function toggleMenu() {
        specHeader.classList.toggle('active');
        document.body.style.overflow = specHeader.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        specHeader.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuIcon && specHeader) {
        menuIcon.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMenu();
        });

        if (menuClose) {
            menuClose.addEventListener('click', function (e) {
                e.stopPropagation();
                closeMenu();
            });
        }
    }
});