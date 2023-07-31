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
});