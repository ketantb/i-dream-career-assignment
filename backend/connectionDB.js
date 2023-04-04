require('dotenv').config();
const mongoose = require('mongoose')
const key = process.env.key

//Connection to DB =>
mongoose.set('strictQuery', true);
mongoose.connect(key, (err) => {
    if(err){
        console.log("mongodb connection failed")
    }
    else{
        console.log("connected to mongodb")
    }
})