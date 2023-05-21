function scroll() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $(".pageup").fadeIn();
        } else {
            $(".pageup").fadeOut();
        }
    });

    // $("a[href^='#']").click(function() {
    //     const _href = $(this).attr("href");
    //     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    //     return false;
    //   });

    document.querySelectorAll("a.pageup").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault()

            const ID = this.getAttribute("href").substring(1);
            const scrollTrarget = document.getElementById(ID);

            // const topOffset = document.querySelector("какой-то селектор").offsetHeight /* Для динамичного */
            const topOffset = 0;
            const elementPosition = scrollTrarget.getBoundingClientRect().top;

            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: "smooth",
            })
        });
    });
}

export default scroll;