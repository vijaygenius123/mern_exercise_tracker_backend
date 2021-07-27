const express = require("express")
const { getExercises, addExercise, getExercise, deleteExercise, updateExercise } = require("../controllers/exercises")

const router = express.Router()

router.get('/', getExercises)
router.post('/', addExercise)
router.get('/:id', getExercise)
router.delete('/:id', deleteExercise)
router.post('/update/:id', updateExercise)

module.exports = router
