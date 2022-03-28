const websocket = require('ws');

const wss = new websocket.Server({
    port:8090
})

// console.log("connection ready");

wss.on('connection',function (socket) {
    console.log("connection is ready");

    socket.on('message',function (msg) {
        console.log("user says"+msg);
        socket.send("Hi user");
    })
})