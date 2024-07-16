const express = require('express');
const app = express();
const socket = require('socket.io');


app.get('/', (req, res) => {
    res.send('Hello World');
});


const io = socket(
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    }), {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    }
});


io.on('connection', (socket) => {
    socket.on('disconnect', () => {
    });

    socket.on('join', ({ room, name }) => {
        socket.join(room);
        io.to(room).emit('notification', `${name} has joined the room`);
    })

    socket.on('messageRoom', ({ room, message }) => {
        io.to(room).emit('message', message);
    })
    

});