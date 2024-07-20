import './style.css';

let slideIndex = 0;

const carouselCont = document.getElementsByClassName('carouselCont')[0];

const activateDot = (slideIndex) => {
  const dots = carouselCont.querySelectorAll('.dot');
  dots.forEach((dot) => {
    dot.classList.remove('selected');
  });
  dots[slideIndex].classList.add('selected');
};

const dots = carouselCont.querySelectorAll('.dot');
dots.forEach((dot) => {
  dot.addEventListener('click', (event) => {
    const dotIndex = event.target.getAttribute('data-index');
    slideIndex = dotIndex;
    showSlide();
    activateDot(dotIndex);
  });
});

const carousel = document.getElementById('carousel');

const showSlide = () => {
  console.log(carousel.children);
  const slides = carousel.querySelectorAll('.image-cont');
  console.log(slides);
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[slideIndex].classList.add('active');
  activateDot(slideIndex);
};

const nextSlideBtn = carousel.getElementsByClassName('nextBtn')[0];
const prevSlideBtn = carousel.getElementsByClassName('prevBtn')[0];

nextSlideBtn.addEventListener('click', (event) => {
  slideIndex++;
  showSlide(slideIndex);
});

prevSlideBtn.addEventListener('click', (event) => {
  slideIndex--;
  showSlide(slideIndex);
});

setInterval(autoPlay, 5000);
function autoPlay() {
  slideIndex++;
  showSlide();
}

showSlide();
