//Slider Brand
const brandSlider = new Swiper('.brands-slider', {
    spaceBetween: 26,
    loop: true,
    slidesPerView: 7,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    autoplay: {
        delay: 1500,
    },
    breakpoints: {
        1680: {
            slidesPerView: 7,
            spaceBetween: 26,
        },
        1501: {
            slidesPerView: 6,
            spaceBetween: 26,
        },
        1301: {
            slidesPerView: 6,
            spaceBetween: 6,
        },
        1251: {
            slidesPerView: 5,
            spaceBetween: 29,
        },
        1151: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        1081: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
        981: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        901: {
            slidesPerView: 5,
            spaceBetween: 7.5,
        },
        851: {
            slidesPerView: 4,
            spaceBetween: 33,
        },
        781: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 10 + '%',
        },
        481: {
            slidesPerView: 2,
            spaceBetween: 10 + '%',
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 9 + '%',
        },
    }
});
//Load More Btn
const main = document.querySelector('.main');
const burger = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-menu');
burger.addEventListener('click', function (event) {
    event.preventDefault();
    burger.classList.toggle("active");
    if (burger.classList.contains('active')) {
        mobileMenu.classList.add('active');
        main.style.filter = 'blur(5px)';
    } else {
        mobileMenu.classList.remove('active');
        main.style.filter = 'blur(0px)';
    }
});
window.onresize = function () {
    location.reload();
}