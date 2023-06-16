const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productname:{
        type:String,
     
    },
    productimage:{
        type:String
    },
    price:{
        type:String,
     
    },
    store:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
},{timestamps:true});

module.exports=mongoose.model('Product',productSchema);