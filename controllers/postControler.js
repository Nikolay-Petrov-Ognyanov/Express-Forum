const postService = require("../services/postService")

const postController = require("express").Router()

postController.get("/", async (req, res) => {
    const posts = await postService.getAllPosts()

    res.json(posts)
})

postController.post("/", async (req, res) => {
    console.log(req.body.title, req.body.content)

    await postService.createPost(req.body.title, req.body.content)
})

module.exports = postController