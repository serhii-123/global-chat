const socket = io();
const chatBlock = document.querySelector('.chat');
const nameInput = document.querySelector('.form__name-input');
const messageInput = document.querySelector('.form__message-input');
const submitButton = document.querySelector('.form__submit-button');
const stickerButton = document.querySelector('.form__sticker-button');
const stickerBlock = document.querySelector('.form__sticker-block');
const images = document.querySelectorAll('.form__sticker');
const textColor = getRandomColor();

for(let x = 0; x < images.length; x++) {
    images[x].addEventListener('click', function(e) {
        sendImg(e, socket, nameInput, images[x] );
    });
}

stickerButton.addEventListener('click', function(e) {
    displayBlock(e, stickerBlock);
});


socket.on('message', (msg) => {
    pasteMessage(msg, chatBlock);
});


submitButton.addEventListener('click', (e) => {
    sendMessage(e, socket, nameInput, messageInput, textColor);
});