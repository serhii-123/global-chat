function handleConnectionState(state, popup) {
    switch(state) {
        case 'not_connected':
            popup.style.display = 'block';
            popup.animate([
                {
                    opacity: '0',
                    transform: 'translateY(-10px)'
                }, {
                    opacity: '1',
                    transform: 'translateY(0px)'
                }
            ], {
                duration: 200,
                easing: 'ease-out',
                fill: 'forwards'
            });
            break;
        case 'connected': 
            popup.animate([
                {
                    opacity: '1',
                    transform: 'translateY(0px)'
                }, {
                    opacity: 0,
                    transform: 'translateY(-10px)'
                }
            ], {
                duration: 200,
                easing: 'ease-out',
                fill: 'forwards'
            }).onfinish = function() {
                popup.style.display = 'none';
            }
            break;
    }
}