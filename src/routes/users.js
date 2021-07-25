const express = require("express")
const {listUsers, addUser} = require("../controllers/users")

const router = express.Router()

router.get('/', listUsers)

router.post('/', addUser)

module.exports = router
