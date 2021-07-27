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

function getExercise(req, res) {
    const { id } = req.params
    if(id){
        Exercise.findById(id)
            .then(exercise => res.json(exercise))
            .catch(err => res.status(404).json({'msg': err}))
    } else {
        res.status(400)
    }
}

function deleteExercise(req, res) {
    const { id } = req.params
    if(id){
        Exercise.findByIdAndDelete(id)
            .then(() => res.json('Exercise Deleted'))
            .catch(err => res.status(400).json({'msg': err}))
    } else {
        res.status(400)
    }
}

function updateExercise(req, res) {
    const { id } = req.params
    if(id){
        Exercise.findById(id)
            .then(exercise => {
                const {username, description, duration, date} = req.body

                exercise.username = username
                exercise.description = description
                exercise.duration = Number(duration)
                exercise.date = Date.parse(date)

                exercise.save()
                    .then(() => res.json('Exercise Updated'))
                    .catch(err => res.status(400).json({'msg': err}))

            })
            .catch(err => res.status(400).json({'msg': err}))
    } else {
        res.status(404)
    }
}


module.exports = {getExercises, addExercise, getExercise, deleteExercise, updateExercise}
