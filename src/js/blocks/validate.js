function validate() {
    function validate_form(selector) {

        const validate = new JustValidate(selector, 
            {
                errorLabelCssClass: ['error'],
            }
        );
    
        validate.addField("input[name=name]", [
            {
                rule: 'required',
                errorMessage: "Это поле обязательно.",
            },
            {
                rule: 'customRegexp',
                value: /[A-Za-zА-Яа-яЁё]/,
                errorMessage: "Имя может содержать только [A-z] и [А-я]."
            },
            {
                rule: 'minLength',
                value: 1,
                errorMessage: "Имя неможет состоять из одной буквы."
            },
        ]);
        validate.addField("input[name=phone]", [
            {
                rule: 'required',
                errorMessage: "Это поле обязательно.",
            },
            {
                rule: 'minLength',
                value: 17,
                errorMessage: "Номер слишком короткий.",
            },
        ]);
        validate.addField("input[name=email]", [
            {
                rule: 'required',
                errorMessage: "Это поле обязательно.",
            },
            {
                rule: 'email',
                errorMessage: 'Почта должна состоять из @, .com, .ru и т.д в конце',
            },
        ]).onSuccess((event) => {
            console.log("Отправил форму");
            $("form").submit(function(e) {
                e.preventDefault();
        
                // if (!$(this).valid()) {
                //     return;
                // }
        
                $.ajax({
                    type: "POST",
                    url: "mailer/smart.php",
                    data: $(this).serialize()
                }).done(function() {
                    $(this).find("input").val("");
        
                    $("form").trigger("reset");
                });
                return false;
            });
        });
    }

    validate_form("#form_1");
    validate_form("#form_2");
    validate_form("#form_3");
}

export default validate;