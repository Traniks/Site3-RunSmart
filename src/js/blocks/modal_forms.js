function modal() {
    const crosses = document.querySelectorAll(".modal__close");
    const promo_buttons = document.querySelectorAll("[data-modal=consultation]");
    const catalog_buttons = document.querySelectorAll(".button_catalog"); 

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
    crosses.forEach(elem => {
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
}

export default modal;