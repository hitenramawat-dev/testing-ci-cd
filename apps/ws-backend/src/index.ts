import {client} from '@repo/db/client';
import ws, { WebSocketServer } from 'ws';



const wss = new WebSocketServer({port:8080});


wss.on('connection',async(socket) => {

    const user = await client.user.create({
        data:{
            username:Math.random().toString(),
            password:"jhos"
        }
    })
    
    console.log("someone has joined the server");
    
})






