function sendImg(e, socket, nameInput, img) {
    let name = nameInput.value;
    let content = img.src;
    let obj = {
        type: 'sticker',
        name,
        content,
        textColor,
    }
    let imgLink = img.src;
    socket.emit('message', JSON.stringify(obj));
}