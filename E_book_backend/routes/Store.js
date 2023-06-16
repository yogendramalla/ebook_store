const express = require('express');
const Store = require('../models/Store');
const router = express.Router();
const Food = require('../models/Product');

router.route('/').get((req,res,next)=>{
    Store.find({})
    .then((store)=>{
        
        res.status(200).json(store);
    })
    .catch((err)=>(next));
}).post((req,res,next)=>{
    Store.create({
        store_name:req.body.store_name,
        store_address: req.body.store_address,
        // food_item:req.body.food_item,
        store_image:req.body.store_image
    })
    .then((store)=>{
        
        res.status(201).json({store,message:"added"});
        console.log("Added")
        
    })
    .catch((err)=>(next));
}).put((req,res,next)=>{
    res.statusCode=401;
    res.send("You cannot update store");
}).delete((req,res,next)=>{
    // Store.deleteMany({})
    // .then((store)=>{
    //     res.json(store);
    // })
    // .catch((err)=>(next));
    res.statusCode=401;
    res.send("You cannot delete store");
});

router.route('/:id').get((req,res,next)=>{
    Store.findById(req.params.id)
    .populate('fooditem')
    .then((store)=>{
        res.statusCode=200;
        res.json(store);
    })
    .catch((err)=>(next));
 }).post((req,res,next)=>{
    res.statusCode=401;
    res.json("You cannot add store");
}).put((req,res,next)=>{
    Store.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then((store)=>{
        res.json(store);
    })
    .catch((err)=>(next));
}).delete((req,res,next)=>{
    Food.find({store:req.params.id})
        .then((rest)=>{
            if(rest!=null){
                Food.deleteMany({store:req.params.id})
                    .then((rest)=>{
                      
                        res.status(201).json({message:"Food related with store deleted"})
                    })
                    .catch(next);
                }
                Store.findByIdAndDelete(req.params.id)
                .then((store)=>{
                    
                    res.status(200).json(store);
                })
        })
        .catch(next);
});

module.exports=router;