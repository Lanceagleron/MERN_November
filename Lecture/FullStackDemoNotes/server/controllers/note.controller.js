// == CRUD == 
const Note = require("../models/note.models")

// console.log(Note)

// READ ALL
module.exports.findAllNotes = (req, res) => {
    Note.find()
        .then((allNotes) => {
            res.json(allNotes)
        })
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}

// FIND ONE
module.exports.findOneNote = (req, res) => {
    Note.findOne({ _id: req.params.id })
        .then(oneNote => res.json(oneNote))
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}

// CREATE
module.exports.createNewNote = (req, res) => {
    Note.create(req.body)
        .then(newlyCreatedNote => res.json(newlyCreatedNote))
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}

// UPDATE
module.exports.updateNote = (req, res) => {
    Note.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateNote => res.json(updateNote))
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}

// DELETE
module.exports.deleteNote = (req, res) => {
    Note.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}