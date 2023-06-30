jQuery(function($){
	$('.project__tabs-content-item-more').on('click', function(e){
		e.preventDefault();
		var text = $(this).text() == 'Меньше' ? 'Читать полностью' : 'Меньше';
		$(this)
		.text(text)
		$(this).closest('.project__tabs-content-item').toggleClass('active');
		$(this).prev().toggleClass('active');
	})

	const controls = [
		'play-large', // The large play button in the center
		'restart', // Restart playback
		// 'rewind', // Rewind by the seek time (default 10 seconds)
		'play', // Play/pause playback
		// 'fast-forward', // Fast forward by the seek time (default 10 seconds)
		'progress', // The progress bar and scrubber for playback and buffering
		'current-time', // The current time of playback
		'duration', // The full duration of the media
		'mute', // Toggle mute
		'volume', // Volume control
		'captions', // Toggle captions
		'settings', // Settings menu
		// 'pip', // Picture-in-picture (currently Safari only)
		'airplay', // Airplay (currently Safari only)
		// 'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
		'fullscreen' // Toggle fullscreen
	];

	const player = Plyr.setup('.js-player', { controls });
	
	
	$(".project__tabs-btn").click(function(e) {
		e.preventDefault();
    let index = $(this).index();
		$(this).addClass('active');
    $(this).fadeIn();
    $(".project__tabs-content").eq(index).fadeIn();
		$(".project__tabs-btn").not(this).removeClass("active");
    $(".project__tabs-content").not($(".project__tabs-content").eq(index)).fadeOut();
  });
	$('.project__tabs-btn').eq(0).addClass('active');
	$(".project__tabs-content").fadeOut();
	$(".project__tabs-content").eq(0).fadeIn();
	
	$('.project__sidebar-open').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parent().next().toggleClass('active');
	})
});
