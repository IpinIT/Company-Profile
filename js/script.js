// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};


// Product Slide-Show
const productSlides = document.querySelector('.product-slides');
const productSlide = document.querySelectorAll('.product-slide');
const productDots = document.querySelectorAll('.product-dot');
let index = 0;
const totalProductSlides = productSlide.length;

function showProductSlide() {
    productSlides.style.transform = `translateX(${-index * 100}%)`;
    productDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextProductSlide() {
    index = (index + 1) % totalProductSlides;
    showProductSlide();
}

function prevProductSlide() {
    index = (index - 1 + totalProductSlides) % totalProductSlides;
    showProductSlide();
}

// ONCLICK
document.querySelector('.product-next').addEventListener('click', nextProductSlide);
document.querySelector('.product-prev').addEventListener('click', prevProductSlide);

productDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        showProductSlide();
    });
});

// Auto slide
setInterval(nextProductSlide, 3000); // Ganti angka ini untuk mengatur interval waktu pergeseran slide

// Initialize
showProductSlide();


// Porto Slide-Show
const portoSlides = document.querySelector('.porto-slides');
const portoSlide = document.querySelectorAll('.porto-slide');
const portoDots = document.querySelectorAll('.porto-dot');
const totalPortoSlides = portoSlide.length;

function showPortoSlide() {
    portoSlides.style.transform = `translateX(${-index * 100}%)`;
    portoDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextPortoSlide() {
    index = (index + 1) % totalPortoSlides;
    showPortoSlide();
}

function prevPortoSlide() {
    index = (index - 1 + totalPortoSlides) % totalPortoSlides;
    showPortoSlide();
}

document.querySelector('.porto-next').addEventListener('click', nextPortoSlide);
document.querySelector('.porto-prev').addEventListener('click', prevPortoSlide);

portoDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        showPortoSlide();
    });
});

// Auto slide
setInterval(nextPortoSlide, 3000); // Ganti angka ini untuk mengatur interval waktu pergeseran slide

// Initialize
showPortoSlide();

// Hamburger Menu
const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});