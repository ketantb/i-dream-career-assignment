const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Post = require('./postModel/postModel.js')

router.post("/post", async (req, res) => {
    try {
        const post = new Post(req.body)
        console.log(post)
        const postData = await post.save()
        res.json(postData)
    }
    catch (err) {
        res.sendStatus(500).json({ message: err })
    }
})

router.get("/allposts", async (request, response) => {
    try{
        const data = await Post.find().sort({_id:-1})
        response.json(data);
    }
    catch(err){
        // response.sendStatus(500).json({message: err})
        console.log(err)
    }
})

router.delete("/deletepost/:id", async (request, response) => {
    try{
        const id = request.params.id;
        const deletePost = await Post.findByIdAndDelete(id)
        response.send(`data deleted ${deletePost}`)
    }
    catch(err){
        response.status(400).json({message:err.message})
    }
})

module.exports = router