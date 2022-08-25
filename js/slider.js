const images = document.querySelectorAll('.reviews__review-sl');
const sliderLine = document.querySelector('.slider-line');



let count = 0;
let width;

function init() {
    // console.log('resize');
    const slider = document.querySelector('.slider');
    slider.style.width = '270px';
    // console.log(count);
    rollSlider();
}

init();

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * 270 + 'px)';
    // console.log(count);
}