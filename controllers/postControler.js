const Post = require("../models/Post")
const postService = require("../services/postService")

const postController = require("express").Router()

postController.get("/", async (req, res) => {
    try {
        const posts = await postService.getAllPosts()

        res.status(200).json(posts)
    } catch (error) {
        console.error(error)

        res.status(400).json({ message: error.message })
    }
})

postController.post("/", async (req, res) => {
    try {
        await postService.createPost(req.body.title, req.body.content)
    } catch (error) {
        console.error(error)

        res.status(400).json({ message: error.message })
    }
})

postController.get("/:postId", async (req, res) => {
    const post = await Post.findById(req.params.postId)

    res.status(200).json(post)
})

postController.post("/:postId/comments", async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.postId, { $push: { comments: req.body } }, { new: true }
        )

        res.status(200).json(post)
    } catch (error) {
        console.error(error)

        res.status(400).json({ message: error.message })
    }
})

module.exports = postController