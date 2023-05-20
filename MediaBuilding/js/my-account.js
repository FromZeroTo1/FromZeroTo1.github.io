jQuery(function ($) {
	var items = $('.tabs__orders-tbody .tabs__orders-tr')
	var numItems = items.length
	var perPage = 2

	items.slice(perPage).hide()
	$('.tabs__pagination').pagination({
		items: numItems,
		itemsOnPage: perPage,
		prevText: '<img src="images/pagination-arrow.svg">',
		nextText: '<img src="images/pagination-arrow.svg">',
		onPageClick: function (pageNumber) {
			var showFrom = perPage * (pageNumber - 1)
			var showTo = showFrom + perPage
			items.hide().slice(showFrom, showTo).show()
		},
	})

	const loggedMenuBtn = document.querySelector('.menu__logged')
	const loggedMenu = document.querySelector('.account__header-bar')
	loggedMenuBtn.addEventListener('click', e => {
		e.preventDefault()
		loggedMenu.classList.toggle('visible')
	})

	const telInputs = document.querySelectorAll('.input-tel')
	if (telInputs) {
		telInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
			})
		})
	}

	const numInputs = document.querySelectorAll('.input-number')
	if (numInputs) {
		numInputs.forEach(el => {
			IMask(el, {
				mask: Number,
				min: 100,
				max: 9999999999,
				thousandsSeparator: ' ',
			})
		})
	}
})
