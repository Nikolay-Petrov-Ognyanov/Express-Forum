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

function updatePost(postId, post) {
    return Post.updateOne({ _id: postId }, post)
}

function deletePost(postId) {
    return Post.deleteOne({_id: postId})
}

module.exports = {
    createPost,
    readPosts,
    readPost,
    updatePost,
    deletePost
}