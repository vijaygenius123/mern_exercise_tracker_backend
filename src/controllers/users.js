const User = require("../models/users.model")

function addUser(req, res){
    const username = req.body.username
    const newUser = new User({username})

    newUser.save()
        .then(() => res.json({"msg": "User added"}))
        .catch(err => res.status(400).json({"msg": err}))
}

function listUsers(req, res){
    console.log("Get Users")
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json({"msg": err}))
}

module.exports = {addUser, listUsers}
