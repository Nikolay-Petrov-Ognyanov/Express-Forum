const { Schema, model } = require("mongoose")

const postSchema = new Schema({
    authorId: {type: String, required: true},
    title: { type: String, required: true },
    content: { type: String, required: true },
    comments: { type: Array, default: [] }
})

postSchema.index({ title: 1 }, {
    collation: {
        locale: "en",
        strength: 2
    }
})

const Post = model("Post", postSchema)

module.exports = Post