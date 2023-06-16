const mongoose = require('mongoose');
const storeSchema = new mongoose.Schema({
    store_name:{
        type:String,
        required:true
    },
    store_address:{
        type:String,
        required:true
    },
    store_image:{
        type:String
    }
},{timestamps:true});

module.exports = mongoose.model('Store',storeSchema);