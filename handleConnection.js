let checkForVadility = require('./validation');
let clients = [];

function handleConnection(io, socket, images) {
    clients.push(socket.id);

    socket.on('message', (msg) => {
        let obj = JSON.parse(msg);
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