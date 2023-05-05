const express = require("express")
const mongoose = require("mongoose")
const cors = require("./middlewares/cors")
const trim = require("./middlewares/trim")
const userController = require("./controllers/userController")
const postController = require("./controllers/postControler")
const session = require("./middlewares/session")

const connectionString = "mongodb://127.0.0.1:27017/forum"

start()

async function start() {
    await mongoose.connect(connectionString)

    console.log("Database conntected.")

    const app = express()

    app.use(express.json())
    app.use(cors())
    app.use(trim())
    app.use(session())

    app.get("/", (req, res) => {
        res.json({ message: "Hello!" })
    })

    app.use("/users", userController)
    app.use("/posts", postController)

    app.listen(3030, () => console.log("Server started."))
}