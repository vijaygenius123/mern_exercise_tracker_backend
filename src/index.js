const dotenv = require("dotenv")
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRouter = require("./routes/users")

dotenv.config()

const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI

const app = express()
app.use(cors())
app.use(express.json())

app.use('/users', userRouter)

mongoose.connect(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology: true} , (err) => {
    if(err){
        console.log(err)
    } else {
        app.listen(PORT, () => {
            console.log(`Running on http://localhost:${PORT}`)
        })
    }
})
