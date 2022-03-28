const we=require('ws')
const socket=new we('ws://127.0.0.1:8090')

 socket.on('open',()=>
 {
     console.log('connected client')
 })
