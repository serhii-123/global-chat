function pasteMessage(msg, chatBlock) {

    let obj = JSON.parse(msg);

    let messageBlock = document.createElement('div');
    let nameEl = document.createElement('h2');

    messageBlock.className = "chat__message-block";

    nameEl.innerHTML = obj.name;
    nameEl.className = 'chat__name';
    nameEl.style.color = obj.textColor;
    
    if(obj.type == 'text') {

        let messageEl = document.createElement('p');

        messageEl.innerHTML = obj.content;
        messageEl.className = 'chat__message';

        messageBlock.appendChild(nameEl);
        messageBlock.appendChild(messageEl);
        chatBlock.appendChild(messageBlock);

    } else {

        let imgEl = document.createElement('img');

        imgEl.src = obj.content;
        imgEl.className = 'chat__image';

        messageBlock.appendChild(nameEl);
        messageBlock.appendChild(imgEl);

    }

    chatBlock.appendChild(messageBlock);

}