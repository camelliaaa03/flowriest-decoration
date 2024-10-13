// Ambil semua kartu
const cards = document.querySelectorAll('.card');

// Fungsi untuk menampilkan slide berikutnya
function showNextSlide(card) {
  const slides = card.querySelectorAll('.slide');
  slides[0].classList.toggle('active');
  slides[1].classList.toggle('active');
}

// Fungsi untuk menampilkan slide sebelumnya
function showPreviousSlide(card) {
  const slides = card.querySelectorAll('.slide');
  slides[0].classList.toggle('active');
  slides[1].classList.toggle('active');
}

// Tambahkan event listener untuk ikon swipe di setiap kartu
cards.forEach((card) => {
  const leftArrow = card.querySelector('.bi-arrow-left-circle');
  const rightArrow = card.querySelector('.bi-arrow-right-circle');

  // Saat klik ikon kanan, tampilkan slide berikutnya
  rightArrow.addEventListener('click', () => showNextSlide(card));

  // Saat klik ikon kiri, tampilkan slide sebelumnya
  leftArrow.addEventListener('click', () => showPreviousSlide(card));
});
