import {fadeOut} from "./func.js"
import {fadeIn} from "./func.js"

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
}

export default modal;