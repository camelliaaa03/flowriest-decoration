const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    let currentSlide = 0;
    const slides = card.querySelector('.slides');
    const totalSlides = 2; // Hanya ada 2 slide (front dan back)
    
    let startX, endX, isDragging = false;

    // Touch events for swipe functionality
    card.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX; // Get the starting X coordinate
        isDragging = true;
    });

    card.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX; // Get the current X coordinate
    });

    card.addEventListener('touchend', () => {
        if (isDragging) {
            if (startX - endX > 50) {
                showSlide(currentSlide + 1); // Swipe left
            } else if (endX - startX > 50) {
                showSlide(currentSlide - 1); // Swipe right
            }
            isDragging = false;
        }
    });

    // Mouse events for swipe functionality (for desktop)
    let mouseStartX;

    card.addEventListener('mousedown', (e) => {
        mouseStartX = e.clientX; // Get the starting mouse X coordinate
        isDragging = true;
        card.style.cursor = 'grabbing'; // Change cursor to grabbing
    });

    card.addEventListener('mousemove', (e) => {
        if (!isDragging) return; // If not dragging, do nothing
        endX = e.clientX; // Get the current mouse X coordinate
    });

    card.addEventListener('mouseup', () => {
        if (isDragging) {
            if (mouseStartX - endX > 50) {
                showSlide(currentSlide + 1); // Swipe left
            } else if (endX - mouseStartX > 50) {
                showSlide(currentSlide - 1); // Swipe right
            }
            isDragging = false;
            card.style.cursor = 'grab'; // Change cursor back to grab
        }
    });

    card.addEventListener('mouseleave', () => {
        isDragging = false; // Reset dragging state when mouse leaves
    });

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        slides.style.transform = `translateX(${-currentSlide * 100}%)`;
    }

    // Tampilkan sisi depan pertama kali
    showSlide(currentSlide);
});
