let checkForVadility = require('./validation');
let clientsSet = new Set();

function handleConnection(io, socket, images) {
    clientsSet.add(socket.id);

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
            debugger;
            for(let socketId of clientsSet) {
                io.to(socketId).emit('message', msg);
            }
        }
    });

    socket.on('disconnect', () => {
        clientsSet.delete(socket.id);
    });
}

module.exports = handleConnection;