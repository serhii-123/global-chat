function displayElement(e, el, type) {
    let animationSettings = {
        duration: 200,
        easing: 'ease-out',
        fill: 'forwards'
    };
    let transparentStateFrame = {
        opacity: '0',
        transform: 'translateY(10px)'
    }
    let intransparentStateFrame = {
        opacity: '1',
        transform: 'translateY(0px)'
    };
    

    let display = el.style.display;
    e.preventDefault();
    if(display == '' || display == 'none') {
        el.style.display = type;
        el.animate([
            transparentStateFrame,
            intransparentStateFrame
        ], animationSettings);
        stickerBlockIsOpen = true;
    } else {
        el.animate([
            intransparentStateFrame,
            transparentStateFrame
        ], animationSettings).onfinish = function() {
            el.style.display = 'none';
            stickerBlockIsOpen = false;
        };
    }
}