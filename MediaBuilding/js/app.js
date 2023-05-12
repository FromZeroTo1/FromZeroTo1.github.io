//Burger Menu Open
const page = document.getElementById('page');
const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger');
let isOpen = false;
burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.toggle('active');
    page.classList.toggle('change');
    isOpen = true;
});
document.body.addEventListener('click', (e) => {
    if (isOpen && !burgerMenu.contains(e.target)) {
        page.classList.remove('change');
        burgerMenu.classList.remove('active');
    }
}, true);
//Burger Dropdown Menu
const burgerDropdown = document.querySelectorAll('.dropdown');
burgerDropdown.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        el.classList.toggle('active');
        el.nextElementSibling.classList.toggle('open');
    })
});
