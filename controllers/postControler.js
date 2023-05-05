const postController = require("express").Router()

postController.get("/", (req, res) => {
    console.log(req.user)

    res.json([])
})

module.exports = postController