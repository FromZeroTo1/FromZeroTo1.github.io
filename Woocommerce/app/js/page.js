//Filter
//Range Filter Start
let fromRange = document.querySelectorAll('.from-to__range');
let inputElements = [];
for (let j = 0; j < fromRange.length; j++) {
    inputElements[j] = fromRange[j].children;
}
let minValue = document.querySelectorAll(".min-value");
let maxValue = document.querySelectorAll(".max-value");
let x = 0;
for (let i = 0; i < fromRange.length; i++) {
    function validateRange(minPrice, maxPrice) {
        if (minPrice > maxPrice) {
            tempValue = maxPrice;
            maxPrice = minPrice;
            minPrice = tempValue;
        }
        minValue[i].innerHTML = "от " + minPrice;
        maxValue[i].innerHTML = "до " + maxPrice;
    }
    for (let j = 0; j < 2; j++) {
        inputElements[i][j].addEventListener("change", (e) => {
            minPrice = parseInt(inputElements[i][0].value);
            maxPrice = parseInt(inputElements[i][1].value);
            validateRange(minPrice, maxPrice);
        });
    }
    for (let j = 0; j < 2; j++) {
        window.addEventListener("load", (e) => {
            minPrice = parseInt(inputElements[i][0].value);
            maxPrice = parseInt(inputElements[i][1].value);
            validateRange(minPrice, maxPrice);
        });
    }
}
//Range Filter End

//Range Filter On
const filterOnBtn = document.querySelector('.filter-btn');
const filters = document.querySelectorAll('.filter-item');
if (filterOnBtn !== null) {
    filterOnBtn.addEventListener('click', function (event) {
        event.preventDefault();
        for (let i = 0; i < filters.length; i++) {
            filters[i].classList.toggle('active');
        }
    });
    window.addEventListener('load', function () {
        if (window.outerWidth >= 1251) {
            for (let i = 0; i < filters.length; i++) {
                filters[i].classList.add('active');
            }
        }
    });
}
let filtersBtns = document.querySelectorAll(".filter-accordion__btn");
for (i = 0; i < filtersBtns.length; i++) {
    filtersBtns[i].addEventListener("click", function (event) {
        event.preventDefault();
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.marginBottom = "0px";
            panel.style.display = "none";
        } else {
            if (!panel.classList.contains('filter-list')) {
                panel.style.marginBottom = "50px";
            }
            panel.style.display = "block";
        }
    });
}
//Range Filter End
//Radio Filter Start
let radioInputs = document.querySelectorAll('input[type="radio"]');
radioInputs.forEach((element) => {
    element.addEventListener('click', function () {
        element.classList.toggle('active');
    })
})
//Radio Filter End
//End Filter
let catalogItemsCount;
const mediaQuery1 = window.matchMedia('(min-width: 1681px)'),
    mediaQuery2 = window.matchMedia('(min-width: 901px)'),
    mediaQuery3 = window.matchMedia('(min-width: 571px)');
if (mediaQuery1.matches) {
    catalogItemsCount = 20;
}
else if (mediaQuery2.matches) {
    catalogItemsCount = 15;
}
else if (mediaQuery3.matches) {
    catalogItemsCount = 12;
} else {
    catalogItemsCount = 8;
}
$('.page-product').slice(catalogItemsCount).hide();
let loadNumber = catalogItemsCount;

$('.product-pagination').pagination({
    items: $('.page-product').length,
    itemsOnPage: loadNumber,
    prevText: "",
    nextText: "",
    onPageClick: function (pageNumber) {
        var showFrom = loadNumber * (pageNumber - 1);
        var showTo = showFrom + loadNumber;
        $('.page-product').hide().slice(showFrom, showTo).show();
        $('body,html').animate({
            scrollTop: 0
        }, 1200);
        return false;
    }
});

$(".more-product__btn").on("click", function (e) {
    e.preventDefault();
    $(".page-product:hidden").slice(0, catalogItemsCount).css("display", "flex").hide().fadeIn();
    if ($(".page-product:hidden").length == 0) {
        $(".more-product__btn").hide();
    }
    loadNumber += catalogItemsCount;
    console.log(loadNumber);
    $('.product-pagination').pagination({
        items: $('.page-product').length,
        itemsOnPage: loadNumber,
        prevText: "",
        nextText: "",
        onPageClick: function (pageNumber) {
            var showFrom = loadNumber * (pageNumber - 1);
            var showTo = showFrom + loadNumber;
            $('.page-product').hide().slice(showFrom, showTo).show();
            $('body,html').animate({
                scrollTop: 0
            }, 1200);
            return false;
        }
    });
    const pagePhone = document.querySelector('.page-phone');
    const page = document.querySelector('.page-content');
    let pageTop = page.offsetTop;
    let pageBottom = pageTop + page.clientHeight - pagePhone.clientHeight;
    console.log(window.scrollY);
    console.log(pageTop);
    console.log(pageBottom);
    window.addEventListener('scroll', function () {
        if (window.scrollY >= pageTop && window.scrollY <= pageBottom) {
            pagePhone.style.top = `${window.scrollY - pageTop}px`
        }
    });
});
const pagePhone = document.querySelector('.page-phone');
const page = document.querySelector('.page-content');
let pageTop = page.offsetTop;
let pageBottom = pageTop + page.clientHeight - pagePhone.clientHeight;
window.addEventListener('scroll', function () {
    if (window.scrollY >= pageTop && window.scrollY <= pageBottom) {
        pagePhone.style.top = `${window.scrollY - pageTop}px`
    }
});