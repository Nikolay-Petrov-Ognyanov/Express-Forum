const { Schema, model } = require("mongoose")

const postSchema = new Schema({
    title: { type: String, required: true },
    content: {type: String, required: true}
})

// postSchema.index({ title: 1 }, {
//     collation: {
//         locale: "en",
//         strength: 2
//     }
// })

const Post = model("Post", postSchema)

module.exports = Post