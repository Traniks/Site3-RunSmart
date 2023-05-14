// slick-slider
// $(document).ready(function(){
//     $('.slider__inner').slick({
//         infinite: true,
//         slidesToShow: 1,
//         speed: 600,
//         adaptiveHeight: true,
//         autoplay: true,
//         autoplaySpeed: 5000,
//         prevArrow: '<button type="button" class="prev"><img src="icons/slider/arrow_left.png"></button>',
//         nextArrow: '<button type="button" class="next"><img src="icons/slider/arrow_right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
//   });

// tiny-slider
document.addEventListener("DOMContentLoaded", () => {
    const slider = tns({
        container: '.slider__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        autoplayTimeout: 1000,
        controls: false,
        nav: true,
        navPosition: "bottom",
        autoHeight: true,
    });
    document.querySelector(".prev").addEventListener("click", function() {
        slider.goTo("prev");
    });
    document.querySelector(".next").addEventListener("click", function() {
        slider.goTo("next");
    });
    // tiny-slider end
    // catalog
    $('ul.catalog__menu').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('catalog__menu-item_active').siblings().removeClass('catalog__menu-item_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleClass(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleClass('.catalog-item__link');
    toggleClass('.catalog-item__back');
    
    // catalog end

    // const map = document.querySelector("#mapDiv > div > div > div:nth-child(5) > div");
    
        
    // setInterval(()=> {
    //     map.style.display = "none";
    //     console.log(map);
    // }, 1000);

    // Modal

    const cross = document.querySelectorAll(".modal__close");
    const promo_buttons = document.querySelectorAll("[data-modal=consultation]");
    const promo_button = document.querySelector("[data-modal=consultation]");
    const catalog_buttons = document.querySelectorAll(".button_catalog"); 
    const overlay = document.querySelector(".overlay");
    const buttons = document.querySelectorAll(".button")

    promo_buttons.forEach(elem => {
       elem.addEventListener("click", () => {
           fadeIn(".overlay");
           fadeIn("#consultation");
       });
    });
    catalog_buttons.forEach(elem => {
        elem.addEventListener("click", () => {
            const title = elem.parentNode.parentNode.querySelector(".catalog-item__subtitle");
            document.querySelector("#order .modal__subtitle").textContent = `${title.textContent}`;
            fadeIn(".overlay");
            fadeIn("#order");
        });
    });
    cross.forEach(elem => {
        elem.addEventListener("click", () => {
            fadeOut(".overlay");
            fadeOut("#consultation");
            fadeOut("#thanks");
            fadeOut("#order");
        });
    });

    function fadeOut(el) {
        let opacity = 1;
        const timer = setInterval(function() {
            if(opacity <= 0.1) {
                clearInterval(timer);
                document.querySelector(el).style.display = "none";
            }
            document.querySelector(el).style.opacity = opacity;
            opacity -= opacity * 0.1;
        }, 10);
    
    }
    function fadeIn(el) {
        let opacity = 0.01;
        document.querySelector(el).style.display = "block";
        const timer = setInterval(function() {
            if(opacity >= 1) {
                clearInterval(timer);
            }
            document.querySelector(el).style.opacity = opacity;
            opacity += opacity * 0.1;
        }, 10);
    }
});

