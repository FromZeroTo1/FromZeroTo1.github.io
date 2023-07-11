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