let checkForVadility = require('./validation');
let clients = [];

function handleConnection(io, socket, images) {
    clients.push(socket.id);

    socket.on('message', (msg) => {
        let obj;
        try {
            obj = JSON.parse(msg);
        } catch {
            console.log('Error: invalid JSON');
            return;
        }
        let isValid = checkForVadility(obj, images);
        if(isValid) {
            for(let x = 0; x < clients.length; x++) {
                let id = clients[x];
                io.to(id).emit('message', msg);
            }
        }
    });

    socket.on('disconnect', () => {

        clients.splice(clients.indexOf(socket.id), 1);
    
    });
}

module.exports = handleConnection;