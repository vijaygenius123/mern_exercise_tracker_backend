const dotenv = require("dotenv")
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

dotenv.config()

const PORT = process.env.PORT || 8000

const app = express()


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})
