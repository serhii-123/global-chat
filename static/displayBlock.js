function displayBlock(e, stickerBlock) {
    let display = stickerBlock.style.display;
    e.preventDefault();
    if(display == '' || display == 'none') {
        stickerBlock.style.display = 'flex';
        stickerBlock.animate([
            {opacity: "0"},
            {opacity: "1"}
        ], {
            duration: 100,
            easing: "ease-out",
            fill: "forwards"
        });
        stickerBlockIsOpen = true;
    } else {
        stickerBlock.animate([
            {opacity: "1"},
            {opacity: "0"}
        ], {
            duration: 100,
            easing: "ease-out",
            fill: "forwards"
        }).onfinish = function() {
            stickerBlock.style.display = 'none';
            stickerBlockIsOpen = false;
        };
    }
}