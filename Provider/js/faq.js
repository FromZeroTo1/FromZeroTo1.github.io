jQuery(function($) {
	$('.faq__item-btn').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('visible');
		$(this).parent().next().slideToggle();
		$(this).parent().parent().toggleClass('visible');
	})
})