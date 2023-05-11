const postService = require("../services/postService")
const postController = require("express").Router()

postController.get("/", async (req, res) => {
    try {
        const posts = await postService.readPosts()

        res.status(200).json(posts)
    } catch (error) {
        console.error(error)

        res.status(400).json({ message: error.message })
    }
})

postController.post("/", async (req, res) => {
    try {
        const post = await postService.createPost(
            req.body.authorId,
            req.body.title,
            req.body.content,
        )

        res.status(200).json(post)
    } catch (error) {
        console.error(error)

        res.status(400).json({ message: error.message })
    }
})

postController.get("/:postId", async (req, res) => {
    try {
        const post = await postService.readPost(req.params.postId)

        res.status(200).json(post)
    } catch (error) {
        console.error(error)

        res.status(400).json({ message: error.message })
    }
})

postController.put("/:postId", async (req, res) => {
    try {
        const post = await postService.updatePost(req.params.postId, req.body)

        res.status(200).json(post)
    } catch (error) {
        console.error(error)

        // res.status(400).json({ message: error.message })
    }
})

module.exports = postController