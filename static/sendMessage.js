function sendMessage(e, socket, nameInput, messageInput, textColor) {
    e.preventDefault();
    let name = nameInput.value;
    let content = messageInput.value;
    if(name != "" && content != "") {

        let obj = {
            type: 'text',
            name,
            content,
            textColor,
        };

        socket.emit('message', JSON.stringify(obj));
    }
}