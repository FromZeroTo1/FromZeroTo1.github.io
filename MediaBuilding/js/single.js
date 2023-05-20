//Accordion Start
const accordionLink = document.querySelectorAll('.single__accordion-title');
const accordionList = document.querySelectorAll('.single__accordion-list');
accordionLink.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        element.classList.toggle('active');
        accordionList[index].classList.toggle('active');
    })
});
// Accordion End

jQuery(function() {
    $('.single__content').hide();
    $('.single__more-link').click( e  => {
        e.preventDefault();
        $('.single__content').slideToggle();
    });
});