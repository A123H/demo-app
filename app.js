const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    try{
        res.status(200).json({msg: "app is working!!!"});
    }catch(err){
        res.status(500).json({msg: "something wrong with the server"});
    }
});

app.get("/test", (req, res)=>{
    try{
        res.status(200).json({msg: "test: app is working!"});
    }catch(err){
        res.status(500).json({msg: "test: something wrong with the server"});
    }
});

app.listen(3000, ()=>{console.log('app started at port 3000');});
