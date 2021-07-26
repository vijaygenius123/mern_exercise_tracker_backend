const Exercise = require("../models/exercises.model")

function getExercises(req, res){
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json({"msg": err}))
}

function addExercise(req, res){
    const {username, description, duration, date, } = req.body

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save()
        .then(() => res.json('Exercise added'))
        .catch(err => res.status(400).json({'msg': err}))

}

module.exports = {getExercises, addExercise}
