document.addEventListener('DOMContentLoaded', function () {
    const newclothes = document.querySelector('.newclothes');
    const addresses = document.querySelectorAll('.addr');

    function fadeDown() {
        newclothes.classList.add('visible')
    }
    function fadeRight() {
        addresses.forEach(address => {
            const rect = address.getBoundingClientRect();
            if(rect.top < window.innerHeight && rect.bottom > 0) {
                address.classList.add('open');
            }
        })
    }
    window.addEventListener('scroll', fadeRight);
    fadeDown();
})