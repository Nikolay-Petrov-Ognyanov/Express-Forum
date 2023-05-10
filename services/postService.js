const Post = require("../models/Post")

function createPost(title, content) {
    return Post.create({ title, content })
}

function getPosts() {
    return Post.find({})
}

function getPost(id) {
    return Post.findOne({_id: id})
}

module.exports = {
    createPost,
    getPosts,
    getPost
}