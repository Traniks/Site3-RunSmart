// tiny-slider start
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

    // Catalog start
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
    // Catalog end

    // Modal start
    const cross = document.querySelectorAll(".modal__close");
    const promo_buttons = document.querySelectorAll("[data-modal=consultation]");
    // const promo_button = document.querySelector("[data-modal=consultation]");
    const catalog_buttons = document.querySelectorAll(".button_catalog"); 
    // const overlay = document.querySelector(".overlay");
    // const buttons = document.querySelectorAll(".button")

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
            fadeOut("#order");
            fadeOut("#thanks");
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
    // Modal end

    // Validate start
    let reg1 = /[A-Za-zА-Яа-яЁё]/;
    let reg2 = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    // const input_name = document.querySelectorAll("input[name=name]");
    // const input_email = document.querySelectorAll("input[name=email]");
    const input_btn = document.querySelectorAll("form.feed-form button.button");
    const btn = document.querySelector("#button");
    const input = document.querySelector("#input");

    // btn.addEventListener("click", function(e) {
    //     e.preventDefault();
    //     if(validate(reg1, input.value)) {
        //         console.log(input.value);
    //         console.log("Да");
    //     } else {
        //         console.log(input.value);
    //         console.log("Нет");
    //     }
    // });
    
    input_btn.forEach(elem => {
        elem.addEventListener("click", (e) => {
            const input_name = elem.parentNode.querySelector("input[name=name]");
            const span = elem.parentNode.querySelector("span");
            e.preventDefault();
            if(validate(reg1, input_name.value)) {
                valid(input_name, span, "")
                console.log("Да");
            } else {
                notValidate(input_name, span, "Проверка не пройдена")
                console.log("Нет");
            }
        });
    });

    function validate(reg, input) {
        console.log(reg.test(input));
        return reg.test(input);
    }

    function notValidate(input, elem, message) {
        elem.classList.remove("valid");
        elem.classList.add("not-valid");
        elem.innerHTML = message;
    }
    function valid(input, elem, message) {
        elem.classList.remove("not-valid");
        elem.classList.add("valid");
        elem.innerHTML = message;
    }

    // Validate end
});

