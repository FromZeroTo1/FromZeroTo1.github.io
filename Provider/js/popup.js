jQuery(function($){
	// Partner Popup Start
	$('.partner-open').on('click', function(e){
		e.preventDefault();
		$('.partner').addClass('show');
	});
	$('.partner-close').on('click', function(e){
		e.preventDefault();
		$('.partner').removeClass('show');
	});
	// Partner Popup End

  // Memo Popups Start
	$('.memo__item-btn').on('click', function(e){
		e.preventDefault();
		$(this).parent().parent().next().addClass('show');
	});

	$('.memo-popup-close').on('click', function(e){
		e.preventDefault();
		$(this).parent().parent().removeClass('show');
	});
	// Memo Popups End
});