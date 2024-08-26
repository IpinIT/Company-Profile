// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};


// Product Slide-Show

let currentIndex1 = 0;
let currentIndex2 = 0;

const slider1 = document.getElementById('product-slider1');
const slider2 = document.getElementById('product-slider2');
const slides1 = slider1.getElementsByClassName('product-slide');
const slides2 = slider2.getElementsByClassName('product-slide');
const totalProductSlides1 = slides1.length;
const totalProductSlides2 = slides2.length;

function showProductSlide(slider, slides, index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${index * 100}%)`;
    }
}

function nextProductSlide1() {
    currentIndex1 = (currentIndex1 + 1) % slides1.length;
    showProductSlide(slider1, slides1, currentIndex1);
}

function nextProductSlide2() {
    currentIndex2 = (currentIndex2 + 1) % slides2.length;
    showProductSlide(slider2, slides2, currentIndex2);
}

function prevProductSlide1() {
    currentIndex1 = (currentIndex1 - 1 + totalProductSlides1) % totalProductSlides1;
    showProductSlide();
}
function prevProductSlide2() {
    currentIndex2 = (currentIndex2 - 1 + totalProductSlides2) % totalProductSlides2;
    showProductSlide();
}

// // ONCLICK
document.querySelector('.product-next1').addEventListener('click', nextProductSlide1);
document.querySelector('.product-prev1').addEventListener('click', prevProductSlide1);
document.querySelector('.product-next2').addEventListener('click', nextProductSlide2);
document.querySelector('.product-prev2').addEventListener('click', prevProductSlide2);

setInterval(nextProductSlide1, 3000); // Ganti slide setiap 3 detik
setInterval(nextProductSlide2, 4000); // Ganti slide setiap 4 detik

// const productSlides = document.querySelector('.product-slides');
// const productSlide = document.querySelectorAll('.product-slide');
// const productDots = document.querySelectorAll('.product-dot');
// let index = 0;
// const totalProductSlides = productSlide.length;

// function showProductSlide() {
//     productSlides.style.transform = `translateX(${-index * 100}%)`;
//     productDots.forEach((dot, i) => {
//         dot.classList.toggle('active', i === index);
//     });
// }

// function nextProductSlide() {
//     index = (index + 1) % totalProductSlides;
//     showProductSlide();
// }

// function prevProductSlide() {
//     index = (index - 1 + totalProductSlides) % totalProductSlides;
//     showProductSlide();
// }

// // ONCLICK
// document.querySelector('.product-next').addEventListener('click', nextProductSlide);
// document.querySelector('.product-prev').addEventListener('click', prevProductSlide);

// productDots.forEach((dot, i) => {
//     dot.addEventListener('click', () => {
//         index = i;
//         showProductSlide();
//     });
// });

// // Auto slide
// setInterval(nextProductSlide, 3000); // Ganti angka ini untuk mengatur interval waktu pergeseran slide

// // Initialize
// showProductSlide();


// Porto Slide-Show
const portoSlides = document.querySelector('.porto-slides');
const portoSlide = document.querySelectorAll('.porto-slide');
const portoDots = document.querySelectorAll('.porto-dot');
const totalPortoSlides = portoSlide.length;
let index = 0;

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
setInterval(nextPortoSlide, 3000);

// Initialize
showPortoSlide();

// Hamburger Menu
const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});