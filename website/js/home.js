jQuery(function($){
  const sliderSwiper = new Swiper('.slider__swiper', {
    speed: 1000,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
    breakpoints: {
      1700: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 45,
      },
      901: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 45,
      },
      601: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 35,
      },
      1: {
        slidesPerView: 'auto',
        spaceBetween: 35,
      }
    },
  });


  const authorSwiper = new Swiper('.author__slider', {
    slidesPerView: 1,
    speed: 1000,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.author__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.author__next',
      prevEl: '.author__prev',
    },
  });


});
