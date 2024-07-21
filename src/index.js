import './style.css';

const initialiseCarousel = () => {
  let slideIndex = 0;

  const carouselCont = document.querySelector('.carouselCont');
  const slides = carouselCont.querySelectorAll('.image-cont');

  const totalSlides = slides.length;

  const dotHolder = carouselCont.querySelector('.circleHolder');

  const activateDot = () => {
    const dots = carouselCont.querySelectorAll('.dot');
    dots.forEach((dot) => {
      dot.classList.remove('selected');
    });
    dots[slideIndex].classList.add('selected');
  };

  const showSlide = () => {
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

  const createDot = (dotIndex) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('data-index', dotIndex);
    dot.addEventListener('click', () => {
      slideIndex = dotIndex;
      showSlide();
      activateDot(dotIndex);
    });
    return dot;
  };

  // create the dots
  for (let index = 0; index < totalSlides; index++) {
    dotHolder.appendChild(createDot(index));
  }

  const carousel = document.getElementById('carousel');

  const nextSlideBtn = carousel.querySelector('.nextBtn');
  const prevSlideBtn = carousel.querySelector('.prevBtn');

  const progressSlide = (n) => {
    slideIndex += n;
    showSlide();
  };

  function autoPlay() {
    progressSlide(1);
  }

  // 5 seconds
  const slideShowInterval = 2000;

  const resetTimer = (timer) => {
    clearInterval(timer);
    return setInterval(autoPlay, slideShowInterval);
  };
  let timer = setInterval(autoPlay, slideShowInterval);

  nextSlideBtn.addEventListener('click', () => {
    timer = resetTimer(timer);
    progressSlide(1);
  });

  prevSlideBtn.addEventListener('click', () => {
    timer = resetTimer(timer);
    progressSlide(-1);
  });

  showSlide();
};

export default initialiseCarousel;

initialiseCarousel();
