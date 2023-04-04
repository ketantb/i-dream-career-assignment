const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    date: {type: String, require: true},
    label: {type: String, require: true},
    id: {type: String, require: true},
    imgUrl: {type: String, require: true}
})

const Post =  mongoose.model("post", postSchema)
module.exports = Post;