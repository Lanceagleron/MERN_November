const Joke = require("../models/joke.model")

// console.log(Joke)

// READ ALL
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json(allJokes)
        })
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}

// FIND ONE
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}

// CREATE
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json(newlyCreatedJoke))
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}

// UPDATE
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateJoke => res.json(updateJoke))
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}

// DELETE
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}