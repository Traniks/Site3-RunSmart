function tiny_slider() {
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
}

export default tiny_slider;