import tiny_slider from "./blocks/tiny-slider.js";
import phone_mask from "./blocks/phone_mask.js";
import catalog from "./blocks/catalog.js";
import modal from "./blocks/modal_forms.js";
import validate from "./blocks/validate.js";
import mail from "./blocks/mail.js";
import scroll from "./blocks/scroll.js";

document.addEventListener("DOMContentLoaded", () => {
   
    new WOW().init();

    tiny_slider();
    phone_mask();
    catalog();
    modal();
    validate();
    mail()
    scroll();
    
});
