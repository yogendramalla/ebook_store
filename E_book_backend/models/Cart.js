const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    totalprice:{

        type:Number
    },

    notes:{
        type:String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    quanity : {
        type: Number
    }

},{timestamps:true});

module.exports = mongoose.model('Cart',cartSchema);