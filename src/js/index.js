$(document).ready(function(){
    $('.slider__inner').slick({
        infinite: true,
        slidesToShow: 1,
        speed: 600,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
  });
