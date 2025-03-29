const connectMongo = require('./connection');
const express = require('express');

const app = express();
connectMongo();

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use("/",require("./Routes/auth.js"))

app.listen(2000,()=>{
    console.log("connected to server");
})