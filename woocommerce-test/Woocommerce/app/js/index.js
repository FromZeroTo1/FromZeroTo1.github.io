let catalogItemsCount;
const mediaQuery1 = window.matchMedia('(min-width: 1681px)'),
    mediaQuery2 = window.matchMedia('(min-width: 1081px)'),
    mediaQuery3 = window.matchMedia('(min-width: 781px)');

if (mediaQuery1.matches) {
    catalogItemsCount = 10;
}
else if (mediaQuery2.matches) {
    catalogItemsCount = 8;
}
else if (mediaQuery3.matches) {
    catalogItemsCount = 6;
} else {
    catalogItemsCount = 4;
}
$(".catalog-item").slice(0, catalogItemsCount).show();
$(".catalog-more").on("click", function (e) {
    e.preventDefault();
    $(".catalog-item:hidden").slice(0, catalogItemsCount).fadeIn();
    if ($(".catalog-item:hidden").length == 0) {
        $(".catalog-more").hide();
    }
});

const catalogPhone = document.querySelector('.catalog-phone');
const catalog = document.querySelector('.catalog');
let catalogTop = catalog.offsetTop;
let catalogBottom = catalogTop + catalog.clientHeight - catalogPhone.clientHeight;
window.addEventListener('scroll', function(){
    if(window.scrollY >= catalogTop && window.scrollY <= catalogBottom){
        catalogPhone.style.top = `${window.scrollY - catalogTop}px`
    }
});