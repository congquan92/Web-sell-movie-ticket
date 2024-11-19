document.addEventListener('DOMContentLoaded', function () {
    const newclothes = document.querySelector('.newclothes');
    const addresses = document.querySelectorAll('.addr');
    const cities = document.querySelector('.city');
    function fadeDown() {
        newclothes.classList.add('fadedown');
    }
    function fadeRight() {
        addresses.forEach(address => {
            const rect = address.getBoundingClientRect(); // lay thong tin vi tri va kich thuoc cua phan tu
            if(rect.top < window.innerHeight) {
                address.classList.add('faderight');
            }
        })
    }
    function flipLeft() {
        cities.forEach(city => {
            const rect = city.getBoundingClientRect();
            if(rect.top < window.innerHeight) {
                city.classList.add('flipleft');
            }
        })
    }
    window.addEventListener('scroll', fadeRight);
    fadeDown();
})