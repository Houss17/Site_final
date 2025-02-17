// carousel 2eme page pour les formations courte 
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.img-court');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100; // Déplacement basé sur l'index
    track.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; 
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});



// menu burger 
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navUl = document.querySelector('.nav_ul');

    burger.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });
});
