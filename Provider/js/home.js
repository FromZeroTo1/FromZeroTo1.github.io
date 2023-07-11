jQuery(function($){
	$('.for-filter-item').on('click', function(e) {
		e.preventDefault();
		$('.for-filter-item').removeClass('focus');
		$(this).addClass('focus');
	});

	const advantagesSwiper = new Swiper('.home__advantages-slider', {
		slidesPerView: 4,
		spaceBetween: 23,
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
	});
	
	const newsSwiper = new Swiper('.home__news-slider', {
		slidesPerView: 5,
		spaceBetween: 13,
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
	});
	
	$('.home__faq-arrow').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).closest('.home__faq-top').next('.home__faq-content').toggleClass('active');
	});
})

