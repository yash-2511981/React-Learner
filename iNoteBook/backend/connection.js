const mongoose = require('mongoose');
const connectionString = "mongodb://localhost:27017/iNoteBook";

const connectMongo = ()=>{
    mongoose.connect(connectionString).then(() => {
        console.log("connected to database");
    }).catch((err) => {
        console.log(err)
    });
}

module.exports = connectMongo;