// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;
const totalSlides = slide.length;

function showSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        showSlide();
    });
});

// Auto slide
setInterval(nextSlide, 3000); // Ganti angka ini untuk mengatur interval waktu pergeseran slide

// Initialize
showSlide();


const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});