const Post = require("../models/Post")

function createPost(authorId, title, content) {
    return Post.create({ authorId, title, content })
}

function readPosts() {
    return Post.find({})
}

function readPost(postId) {
    return Post.findOne({ _id: postId })
}

function updatePost(postId, post) {
    return Post.updateOne({ _id: postId }, post)
}

function deletePost(postId) {
    return Post.deleteOne({ _id: postId })
}

async function createComment(postId, comment) {
    const post = await readPost(postId)

    post.comments.push(comment)

    await updatePost(postId, post)

    return post
}

module.exports = {
    createPost,
    readPosts,
    readPost,
    updatePost,
    deletePost,
    createComment
}