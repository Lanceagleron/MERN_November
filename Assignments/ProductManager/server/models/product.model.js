const mongoose = require('mongoose');
 
const ProductSchema = new mongoose.Schema({
    title:{ 
        type: String,
        required: [true, "{Path} is required"],
        minlength: 3
    },
    price:{type: Number,
        required: [true, "{Path} is required"]
    },
    description:{
        type: String,
        minlength: 3
        }
}, {timestamps: true});
 
const Product = mongoose.model('Product', ProductSchema);
 
module.exports = Product;
