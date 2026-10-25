document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica del Carrusel (Hero)
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 4000; // Cambia de foto cada 4 segundos (4000 ms)

    function nextSlide() {
        // Quitar la clase 'active' a la imagen actual
        slides[currentSlide].classList.remove('active');
        
        // Calcular la siguiente imagen
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Poner la clase 'active' a la nueva imagen
        slides[currentSlide].classList.add('active');
    }

    // Iniciar el intervalo solo si hay imágenes
    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }
});