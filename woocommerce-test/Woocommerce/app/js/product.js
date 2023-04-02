//Product Slider Start
var galleryTop = new Swiper('.product-fill__swiper-1', {
    direction: 'vertical',
    slidesPerView: 1,
    slidesPerGroup: 3,
    loop: true,
    speed: 800,
    breakpoints: {
        1080: {},
        0: {
            direction: 'horizontal',
            slidesPerGroup: 1,
            navigation: {
                nextEl: '.product-fill__next-2',
                prevEl: '.product-fill__prev-2',
            },
        }
    }
});
var galleryThumbs = new Swiper('.product-fill__swiper-2', {
    direction: 'vertical',
    speed: 800,
    mousewheel: true,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 5,
    loop: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: '.product-fill__next-2',
        prevEl: '.product-fill__prev-2',
    },
    breakpoints: {
        1080: {

        },
        0: {
            slidesPerView: 1,
            navigation: {
                nextEl: '',
                prevEl: '',
            },
        }
    }
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

//Product Info Start
const infoParagraphs = document.querySelectorAll('.product-fill__paragraph-item');
const productBtns = document.querySelectorAll('.product-fill__btn');
for (let i = 0; i < infoParagraphs.length; i++) {
    productBtns[i].addEventListener('click', function (event) {
        event.preventDefault();
        for (let j = 0; j < infoParagraphs.length; j++) {
            productBtns[j].classList.remove('active');
            infoParagraphs[j].classList.remove('active');
        }
        this.classList.add('active');
        infoParagraphs[i].classList.add('active');
    });
}
//Product Info End

//Product Desc Start
const descParagraphs = document.querySelectorAll('.product-desc__text');
const descBtns = document.querySelectorAll('.product-desc__item');
for (let i = 0; i < descParagraphs.length; i++) {
    descBtns[i].addEventListener('click', function () {
        for (let j = 0; j < descParagraphs.length; j++) {
            descBtns[j].classList.remove('active');
            descParagraphs[j].classList.remove('active');
        }
        this.classList.add('active');
        descParagraphs[i].classList.add('active');
    });
}
//Product Desc End

//Product Incremenet and Decrement Start
let productCount = 1;
const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');
const countNumber = document.querySelector('.product-fill__count');
const handleIncrement = (event) => {
    event.preventDefault();
    if (productCount < 10) {
        productCount++;
    }
    countNumber.innerHTML = productCount;
};
const handleDecrement = (event) => {
    event.preventDefault();
    if (productCount > 1) {
        productCount--;
    }
    countNumber.innerHTML = productCount;
};
if (incrementBtn !== null && decrementBtn !== null) {
    incrementBtn.addEventListener("click", handleIncrement);
    decrementBtn.addEventListener("click", handleDecrement);
}
//Product Incremenet and Decrement End

const productPhone = document.querySelector('.product-phone');
const product = document.querySelector('.product-fill');
let productTop = product.offsetTop;
let productBottom = productTop + product.clientHeight - productPhone.clientHeight;
window.addEventListener('scroll', function () {
    if (window.scrollY >= productTop && window.scrollY <= productBottom) {
        productPhone.style.top = `${window.scrollY - productTop}px`
    }
});