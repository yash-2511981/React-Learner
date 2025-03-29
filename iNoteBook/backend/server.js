const connectMongo = require('./connection');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.listen(2000,()=>{
    console.log("connected to server");
})