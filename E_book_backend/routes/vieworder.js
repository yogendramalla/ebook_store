const express = require('express');
const Order = require('../models/Order');
const router = express.Router();
const auth = require('../auth');


var populateQuery = [{path:'user'}, {path:'product'}];
// router.get('/orders/show/admin',function(req,res){
//     Order.find().then(function(data){
//         res.send(data);
//     })
// })
router.route('/orders/show/admin')
.get((req,res,next)=>{
    Order.find()
    .populate(populateQuery)
    .then((order)=>{
        res.statusCode = 200;
        res.json(order);
    })
})
router.delete('/viewod/delete/:id',(req,res)=>{
    
    const uid=req.params.id

    Order.deleteOne({_id:uid}).then(()=>{
        res.status(200).json({message:"Order has been deleted."})
    }).catch((err)=>{
        res.status(200).json(err)
        console.log("cannot delete")
    })
})

module.exports = router;