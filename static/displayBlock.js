function displayElement(e, el, type) {
    let display = el.style.display;
    e.preventDefault();
    if(display == '' || display == 'none') {
        el.style.display = type;
        el.animate([
            {opacity: "0"},
            {opacity: "1"}
        ], {
            duration: 100,
            easing: "ease-out",
            fill: "forwards"
        });
        stickerBlockIsOpen = true;
    } else {
        el.animate([
            {opacity: "1"},
            {opacity: "0"}
        ], {
            duration: 100,
            easing: "ease-out",
            fill: "forwards"
        }).onfinish = function() {
            el.style.display = 'none';
            stickerBlockIsOpen = false;
        };
    }
}