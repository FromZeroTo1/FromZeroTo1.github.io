const catalogFilterSwiper = new Swiper('.catalog__filter-swiper', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
        nextEl: '.catalog__filter-next',
        prevEl: '.catalog__filter-prev',
        disabledClass: 'disabled_swiper_button'
    },
});
const catalogProductSwiper = new Swiper('.catalog__box-fill', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 20,
});
