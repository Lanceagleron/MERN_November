//import mongoose to build a model
const mongoose = require('mongoose');   

// the schema - the rules the entries in the DB must follow
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be atleast 3 chars long"]
    },
    content: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    isImportant :{
        type: Boolean,
        default: false
    }
}, {timestamps: true})

//create the schema then export it!
const Note = mongoose.model("Note", NoteSchema)
module.exports = Note