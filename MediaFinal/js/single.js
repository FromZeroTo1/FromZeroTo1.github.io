function Decrement(number, step, defaultValue){
	const newValue = number - step;
  return newValue >= defaultValue? newValue : defaultValue;
}
function Increment(number, step, defaultValue){
	const newValue = number + step;
  return newValue >= defaultValue ? newValue : defaultValue;
}

//Accordion Start
const accordionLink = document.querySelectorAll('.single__accordion-title')
const accordionList = document.querySelectorAll('.single__accordion-list')
accordionLink.forEach((element, index) => {
	element.addEventListener('click', event => {
		event.preventDefault()
		element.classList.toggle('active')
		accordionList[index].classList.toggle('active')
	})
})
// Accordion End

//Order Popup Start
const popup = document.querySelector('.popup')
const PopupOpen = document.querySelectorAll('.single__buy')

PopupOpen.forEach(el => {
	el.addEventListener('click', e => {
		e.preventDefault()
		popup.classList.add('show')
	})
})
document.addEventListener('click', event => {
	if (
		!popup.contains(event.target) &&
		!event.target.classList.contains('single__buy')
	) {
		popup.classList.remove('show')
	}
})

//Order Popup End

//Single Content Start
jQuery(function () {
$('.single__content').hide()
$('.single__more-link').click(e => {
	e.preventDefault()
	$('.single__content').slideToggle()
})
})
//Single Content End

const calculatorInputs = document.querySelectorAll('.input-calculator')
if (calculatorInputs) {
	calculatorInputs.forEach(el => {
		IMask(el, {
			mask: Number,
			min: 100,
			max: 9999999999,
			thousandsSeparator: '',
		})
	})
}

const calculatorItem = document.querySelectorAll('.single__calculator-fill');


calculatorItem.forEach(el => {
	const calculatorIncrement = el.querySelector('.single__calculator-increment');
	const calculatorDecrement = el.querySelector('.single__calculator-decrement');
	const calculatorValue = el.querySelector('.single__calculator-input');
	const defaultValue = parseInt(calculatorValue.value);

	if(calculatorIncrement && calculatorDecrement){
		calculatorIncrement.addEventListener('click', e => {
			e.preventDefault();
			calculatorValue.value = Increment(parseInt(calculatorValue.value), 500, defaultValue);
		});
		
		calculatorDecrement.addEventListener('click', e => {
			e.preventDefault();
			calculatorValue.value = Decrement(parseInt(calculatorValue.value), 500, defaultValue);
		});
	}
})

