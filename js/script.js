let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;
const slideInterval = 15000; // 15 secondes

function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;
    
    const offset = -slideIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Affiche la première image au chargement
showSlide(slideIndex);

// Change automatiquement l'image toutes les 15 secondes
setInterval(nextSlide, slideInterval);
