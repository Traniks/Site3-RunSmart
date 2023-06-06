export function fadeOut(el) {
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
export function fadeIn(el) {
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