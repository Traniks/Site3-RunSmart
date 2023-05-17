function validate() {
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
                elem.removeAttribute("disabled");
            } else {
                notValidate(input_name, span, "Проверка не пройдена")
                console.log("Нет");
                elem.setAttribute("disabled", "");
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
}

export default validate;