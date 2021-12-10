function sendImg(e, socket, nameInput, img) {
    let name = nameInput.value;
    let content = img.src;
    let obj = {
        type: 'sticker',
        name,
        content,
        textColor,
    }
    
    socket.emit('message', JSON.stringify(obj));

    console.log(obj);
}