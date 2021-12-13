function displayElement(e, el, type) {
    let display = el.style.display;
    e.preventDefault();
    if(display == '' || display == 'none') {
        el.style.display = type;
        el.animate([
            {
                opacity: '0',
                transform: 'translateY(10px)'
            },
            {
                opacity: '1',
                transform: 'translateY(0px)'
            }
        ], {
            duration: 200,
            easing: "ease-out",
            fill: "forwards"
        });
        stickerBlockIsOpen = true;
    } else {
        el.animate([
            {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            {
                opacity: '0',
                transform: 'translateY(10px)'
            }
        ], {
            duration: 200,
            easing: "ease-out",
            fill: "forwards"
        }).onfinish = function() {
            el.style.display = 'none';
            stickerBlockIsOpen = false;
        };
    }
}