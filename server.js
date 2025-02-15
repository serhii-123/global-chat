const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const handleConnection = require('./handleConnection');
const app = express();
const httpServer = http.createServer(app);
const io = socketIO(httpServer);
const host = '127.0.0.1';
const port = 7000;
let images = [
                'http://localhost:7000/img/papich-clown.jpg',
                'http://localhost:7000/img/roflan-pominki.png',
                'http://localhost:7000/img/roflan-pomoyka.png',
                'http://localhost:7000/img/0.png',
                'http://localhost:7000/img/1.png',
                'http://localhost:7000/img/2.png',
                'http://localhost:7000/img/3.png',
                'http://localhost:7000/img/4.png',
                'http://localhost:7000/img/5.png'];

io.on('connection', (socket) => {
    handleConnection(io, socket, images);
});

app.use(express.static(__dirname + '/static'));

httpServer.listen(port, host, () => {
    console.log(`Server started at ${port} port`);
});