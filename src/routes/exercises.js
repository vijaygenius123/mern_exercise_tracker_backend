const express = require("express")
const { getExercises, addExercise } = require("../controllers/exercises")

const router = express.Router()

router.get('/', getExercises)
router.post('/', addExercise)

module.exports = router
