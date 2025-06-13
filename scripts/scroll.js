document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.main__buttonPrice');
    if (button) {
        button.addEventListener('click', function() {
            const section = document.getElementById('med');
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});