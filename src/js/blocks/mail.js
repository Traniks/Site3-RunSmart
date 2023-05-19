function mail() {
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
}

export default mail;