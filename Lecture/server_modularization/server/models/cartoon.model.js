const mongoose = require('mongoose');
 
const CartoonSchema = new mongoose.Schema({
    title: String,
    genre: String,
    episodes: Number
}, {timestamps: true});
 
const Cartoon = mongoose.model('Cartoon', CartoonSchema);
 
module.exports = Cartoon;



// {
//     title:{
//     type: String,
//     required: [true, "Title is required"]
// },
//     genre:{type: String,
//     required: [true, "Genre is required"]
// },
//     episodes: Number
// }, {timestamps: true});