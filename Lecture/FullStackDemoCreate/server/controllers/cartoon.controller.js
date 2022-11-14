const Cartoon = require("../models/cartoon.model")

// console.log(Cartoon)

// READ ALL
module.exports.findAllCartoons = (req, res) => {
    Cartoon.find()
        .then((allCartoons) => {
            res.json(allCartoons)
        })
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}

// FIND ONE
module.exports.findOneCartoon = (req, res) => {
    Cartoon.findOne({ _id: req.params.id })
        .then(oneCartoon => res.json(oneCartoon))
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}

// CREATE
module.exports.createNewCartoon = (req, res) => {
    Cartoon.create(req.body)
        .then(newlyCreatedCartoon => res.json(newlyCreatedCartoon))
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}

// UPDATE
module.exports.updateCartoon = (req, res) => {
    Cartoon.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateCartoon => res.json(updateCartoon))
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}

// DELETE
module.exports.deleteCartoon = (req, res) => {
    Cartoon.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: '❌ Something went wrong', error: err }));
}