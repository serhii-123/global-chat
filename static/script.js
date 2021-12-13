const socket = io();
const chatBlock = document.querySelector('.chat');
const nameInput = document.querySelector('.form__name-input');
const nameButton = document.querySelector('.form__name-button')
const messageInput = document.querySelector('.form__message-input');
const submitButton = document.querySelector('.form__submit-button');
const stickersButton = document.querySelector('.form__stickers-button');
const setOfStickers = document.querySelector('.form__set-of-stickers');
const images = document.querySelectorAll('.form__sticker');
const textColor = getRandomColor();

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

socket.on('disconnect', () => {
    console.log('Error: you are disconnected');
});

socket.on('connect', () => {
    console.log('Connected');
});

submitButton.addEventListener('click', (e) => {
    sendMessage(e, socket, nameInput, messageInput, textColor);
});