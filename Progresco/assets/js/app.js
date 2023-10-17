jQuery(function ($) {
	$(document).ready(function () {
		// Global Variables
		let firstScroll = true

		// Global Functions

		// Header Animation
		$('.header__action').on('click', function (e) {
			e.preventDefault()

			$(this).addClass('hidden')
			$('.header__animate').addClass('animated')
		})

		function HeaderAnimate(event) {
			if (firstScroll) {
				$('.header__action').addClass('hidden')
				$('.header__animate').addClass('animated')
				firstScroll = false

				event.preventDefault()
			}
		}

		window.addEventListener('wheel', HeaderAnimate, { passive: false })
	})
})
