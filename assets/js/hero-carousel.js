document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.hero-carousel');

  carousels.forEach(carousel => {
    if (typeof Swiper === 'undefined') return;

    const slideCount = carousel.querySelectorAll('.swiper-slide').length;
    if (slideCount < 2) return;

    new Swiper(carousel, {
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: 400,
      containerModifierClass: 'hero-carousel-',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.hero-carousel__dots',
        clickable: true,
      },
      a11y: {
        enabled: true,
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
    });
  });
});
