document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let index = 0;
    const total = images.length;

    function updateSlide() {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener('click', function () {
        index++;
        if (index >= total) {
            index = 0;
        }
        updateSlide();
    });

    prev.addEventListener('click', function () {
        index--;
        if (index < 0) {
            index = total - 1;
        }
        updateSlide();
    });

});