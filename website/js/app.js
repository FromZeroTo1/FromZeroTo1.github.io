const footerSwiper = new Swiper('.footer__bottom-swiper', {
	speed: 1000,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	navigation: {
		nextEl: '.footer__bottom-more',
	},
	breakpoints: {
		1700: {
			slidesPerView: 3,
		},
		1: {
			slidesPerView: 'auto',
		}
	},
});