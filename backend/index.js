const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 8081 
const mongoose = require('mongoose')
app.use(cors())
app.use(express.json())
require('./connectionDB.js')
const Register = require('./Register/registerModel/registerModel.js')
const Post = require('./Post/postModel/postModel.js')
app.use(require('./Register/register.js'))
app.use(require('./Signin/signin.js'))
app.use(require('./Post/post.js'))

app.get("/", async (request, response) => {
    try{
        response.json({message: 'welcome to unsplash'})
    }
    catch(err){
        response.sendStatus(500).json({message: err})
    }
})

// app.get("/allposts", async (request, response) => {
//     try{
//         const data = await Post.find().sort({_id: -1})
//         response.json(data);
//     }
//     catch(err){
//         // response.sendStatus(500).json({message: err})
//         console.log(err)
//     }
// })

app.listen(PORT, () => {
    console.log(`listening to port no ${PORT}`)
})