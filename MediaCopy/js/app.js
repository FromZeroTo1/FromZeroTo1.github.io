function BurgerMenu() {
    let mobileMedia = window.matchMedia("(min-width: 600px)");
    if (mobileMedia.matches) {
        //Burger Menu Open
        const page = document.getElementById('page');
        const burgerBtn = document.querySelector('.general__menu-burger');
        const burgerMenu = document.querySelector('.general-burger');
        let isOpen = false;

        burgerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            burgerMenu.classList.toggle('active');
            page.classList.toggle('change');
            isOpen = true;
        });

        //Burger Menu Close
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
    }else{
        //Burger Menu Open
        const page = document.getElementById('page');
        const burgerBtn = document.querySelector('.mobile__menu-burger');
        const burgerMenu = document.querySelector('.mobile-burger');
        let isOpen = false;

        burgerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            burgerMenu.classList.toggle('active');
            page.classList.toggle('change');
            isOpen = true;
        });

        //Burger Menu Close
        document.body.addEventListener('click', (e) => {
            if (isOpen && !burgerMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
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
    }
}
BurgerMenu();