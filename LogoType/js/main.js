$(function(){

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    $('select').styler();

    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });

    $('.header__btn,.header__email,.header__phone,.news__text,.news__title,.advantages__text,.advantages__title,.form__text,.form__title,.about__text,.about__title,.services__item-text,.services__item-title,.header__logo img, .menu, .slider__title, .slider__text').fadeOut(1).fadeIn(4000);
});