const mongoose = require('mongoose');
 
const CartoonSchema = new mongoose.Schema({
    title:{ 
        type: String,
        required: [true, "Title is required"],
        minlength: 3
    },
        genre:{type: String,
        default: "cartoon"
    },
        episodes:{
            type: Number
        }
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