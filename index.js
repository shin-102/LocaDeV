const slider = document.querySelector('.slider');
const slides = document.querySelector('.slider img');
let currentSlide = 0;

// Define an array with the image sources
const imageSources = [
    "./img/LDV DACIA DUSTER.png",
    "./img/LDV DACIA LODGY.png",
    "./img/LDV DACIA LOGAN.png",
    "./img/LDV DACIA STEPWAY.png",
    "./img/LDV FIAT TIPO.png",
    "./img/LDV RENAULT CLIO.png",
];

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = imageSources.length - 1;
    }
    if (currentSlide >= imageSources.length) {
        currentSlide = 0;
    }

    slides.src = imageSources[currentSlide];
}

function autoChangeSlide() {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

autoChangeSlide();