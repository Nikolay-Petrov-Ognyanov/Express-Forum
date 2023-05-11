const Post = require("../models/Post")

function createPost(authorId, title, content) {
    return Post.create({ authorId, title, content })
}

function readPosts() {
    return Post.find({})
}

function readPost(id) {
    return Post.findOne({ _id: id })
}

module.exports = {
    createPost,
    readPosts,
    readPost
}