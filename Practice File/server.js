//const { on } = require('ws');
const socket = require('ws');
const post=new socket.Server({
    port:8090
});

post.on('connection',()=>
{
    console.log("connected;");
})