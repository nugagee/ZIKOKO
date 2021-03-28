$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:[$('.owl-nav .owl-prev'), $('.owl-nav .owl-next')],
    rewind:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        700:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

const searchIcon = document.querySelector('.search i');
const searchBox = document.querySelector('.search input');
const hamburger = document.querySelector('.log-men nav .hamburger');
const menu = document.querySelector('.log-men nav .menu');






searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("hidden")
});

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active")
});