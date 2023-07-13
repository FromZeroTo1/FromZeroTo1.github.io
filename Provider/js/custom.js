jQuery(function($) {
	document.querySelectorAll('.custom-select').forEach(dropdownWrapper => {
		const dropdownBtn = dropdownWrapper.querySelector('.select__button')
		const dropdownList = dropdownWrapper.querySelector('.select-list')
		const dropdownItems = dropdownList.querySelectorAll('.select__list-option')
		const dropdownInput = dropdownWrapper.querySelector('.select__input-hidden')

		dropdownBtn.addEventListener('click', function () {
			dropdownList.classList.toggle('visible')
			this.classList.toggle('active')
		})

		dropdownItems.forEach(function (listItem) {
			listItem.addEventListener('click', function (e) {
				dropdownItems.forEach(function (el) {
					el.classList.remove('active')
				})
				e.target.classList.add('active')
				dropdownBtn.querySelector('.select__button-name').innerText =
					this.innerText
				dropdownInput.value = this.dataset.value
				dropdownList.classList.remove('visible')
			})
		})

		document.addEventListener('click', function (e) {
			if (e.target !== dropdownBtn) {
				dropdownBtn.classList.remove('active')
				dropdownList.classList.remove('visible')
			}
		})

		document.addEventListener('keydown', function (e) {
			if (e.key === 'Tab' || e.key === 'Escape') {
				dropdownBtn.classList.remove('active')
				dropdownList.classList.remove('visible')
			}
		})
	})





	function HomeTariffCardVisibility() {
		var windowWidth = $(window).width();
		var cardCount;

		// Определите количество карточек в зависимости от ширины окна
		if (windowWidth <= 1700 && windowWidth > 1300) {
			cardCount = 4;
		} else if (windowWidth <= 1300 && windowWidth > 900) {
			cardCount = 3;
		} else if(windowWidth <= 900) {
			cardCount = 2;
		}else{
			cardCount = 5;
		}

		// Показать первоначальное количество карточек
		$(".home__tariff-item:lt(" + cardCount + ")").show();

		// Обработчик события нажатия на кнопку "Show More"
		$(".home__tariff-more").on('click', function(event) {
			event.preventDefault();
			var hidden = $(".home__tariff-item:hidden");
			$(hidden).slice(0, cardCount).fadeIn(800);
			if (hidden.length <= cardCount) {
				$(this).fadeOut();
			}
		});
	}
	HomeTariffCardVisibility();

	$(window).resize(function() {
		HomeTariffCardVisibility();
	});
});

