import {client} from "@repo/db/client";
import express from 'express';

const app = express();


app.use(express.json());

app.get('/',(req,res) => {
    res.send(
        "heee"
    )
})


app.post("/signup",async(req,res) => {
    try {
        const {username,password} = req.body;

    const user = await client.user.create({
        data:{
            username:username,
            password:password
        }
    }) 

    res.json({
        message:"user added",
        id:user.id
    })

    } catch (error) {
        res.status(403).json({
            message:"something wrong",
            error:error,
        })
    }
})


app.listen(3002,() => {
    console.log("yoooooo");
    
})