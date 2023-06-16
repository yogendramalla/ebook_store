const mongoose = require('mongoose');

const productcategorySchema = new mongoose.Schema({
    category:{
        type:String,
       
    },
    catImg:{
        type:String,
    },
    store:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Store"
    },

},{timestamps:true});

module.exports=mongoose.model('Category',productcategorySchema);