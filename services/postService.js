const Post = require("../models/Post")

function createPost(title, content) {
    return Post.create({ title, content })
}

function getAllPosts() {
    return Post.find({})
}

module.exports = {
    createPost,
    getAllPosts
}