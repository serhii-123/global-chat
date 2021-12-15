const socket = io();
const chatBlock = document.querySelector('.chat');
const nameInput = document.querySelector('.form__name-input');
const nameButton = document.querySelector('.form__name-button');
const messageInput = document.querySelector('.form__message-input');
const submitButton = document.querySelector('.form__submit-button');
const stickersButton = document.querySelector('.form__stickers-button');
const setOfStickers = document.querySelector('.form__set-of-stickers');
const connectionErrorPopup = document.querySelector('.connection-error-pop-up');
const images = document.querySelectorAll('.form__sticker');
const textColor = getRandomColor();
let connectionState = 'uncertain';



for(let x = 0; x < images.length; x++) {
    images[x].addEventListener('click', function(e) {
        sendImg(e, socket, nameInput, images[x] );
    });
}

stickersButton.addEventListener('click', function(e) {
    displayElement(e, setOfStickers, 'flex');
});

nameButton.addEventListener('click', function(e) {
    displayElement(e, nameInput, 'block');
});

socket.on('message', (msg) => {
    pasteMessage(msg, chatBlock);
});

socket.on('connect', () => {
    switch(connectionState) {
        case 'uncertain':
            connectionState = 'connected';
            break;
        case 'not_connected': 
            connectionState = 'connected';
            handleConnectionState(connectionState, connectionErrorPopup);
            break;
    }

    console.log('Connected');
});

socket.on('disconnect', () => {
    connectionState = 'not_connected';
    handleConnectionState(connectionState, connectionErrorPopup);
});

submitButton.addEventListener('click', (e) => {
    sendMessage(e, socket, nameInput, messageInput, textColor);
});

setTimeout(function() {
    if(connectionState == 'uncertain') {
        console.log('Error: there is no connection to the server');
    }
}, 100);

console.log(connectionErrorPopup);