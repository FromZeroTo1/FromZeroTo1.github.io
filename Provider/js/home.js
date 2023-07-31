jQuery(function($){

	const advantagesSwiper = new Swiper('.home__advantages-slider', {
		grabCursor: true,
		autoplay: true,
		delay: 1000,
		pagination: {
			el: '.home__advantages-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.home__advantages-next',
			prevEl: '.home__advantages-prev',
		},
		breakpoints: {
			1250: {
				slidesPerView: 4,
				spaceBetween: 23,	
			},
			1100: {
				slidesPerView: 4,
				spaceBetween: 15,	
			},
			800: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			450: {
				slidesPerView: 2,
				spaceBetween: 12,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 12
			},
		}
	});
	
	const newsSwiper = new Swiper('.home__news-slider', {
		grabCursor: true,
		autoplay: true,
		delay: 1000,
		pagination: {
			el: '.home__news-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.home__news-next',
			prevEl: '.home__news-prev',
		},
		breakpoints: {
			1550: {
				slidesPerView: 5,
				spaceBetween: 13,
			},
			1300: {
				slidesPerView: 4,
				spaceBetween: 13,	
			},
			850: {
				slidesPerView: 3,
				spaceBetween: 13,
			},
			531: {
				slidesPerView: 2,
				spaceBetween: 13,
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 13,
			},
		}
	});
	
	$('.home__faq-arrow').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).closest('.home__faq-top').next('.home__faq-content').toggleClass('active');
	});
})

