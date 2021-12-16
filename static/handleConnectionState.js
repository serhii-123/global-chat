function handleConnectionState(state, popup) {
    let animationSettings = {
        duration: 200,
        easing: 'ease-out',
        fill: 'forwards'
    }
    let transparentStateFrame = {
        opacity: '0',
        transform: 'translateY(-10px)'
    }
    let intransparentStateFrame = {
        opacity: '1',
        transform: 'translateY(0px)'
    }

    switch(state) {
        case 'not_connected':
            popup.style.display = 'block';
            popup.animate([
                transparentStateFrame, 
                intransparentStateFrame
            ], animationSettings);
            break;
        case 'connected': 
            popup.animate([
                intransparentStateFrame, 
                transparentStateFrame
            ], animationSettings).onfinish = function() {
                popup.style.display = 'none';
            }
            break;
    }
}