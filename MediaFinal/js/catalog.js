const catalogProductSwiper = new Swiper('.catalog__box-fill', {
	speed: 400,
	slidesPerView: 'auto',
	spaceBetween: 20,
})

const catalogArrowPrev = document.querySelector('.catalog__filter-prev')
const catalogArrowNext = document.querySelector('.catalog__filter-next')
const catalogProducts = document.querySelector('.catalog__fill')

catalogArrowPrev.addEventListener('click', function(e) {
	e.preventDefault()
})
catalogArrowNext.addEventListener('click', function(e) {
  e.preventDefault()
  this.classList.toggle('active')
  catalogProducts.classList.toggle('visible')
})