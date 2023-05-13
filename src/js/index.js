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
});

