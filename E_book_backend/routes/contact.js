const express=require('express')
const router=express.Router();

const Contact=require('../models/Contact')
const {check,validationResult}=require('express-validator')

router.post('/insert/contact',function(req,res){
    const email=req.body.email;
    const help=req.body.help;
        const me=new Contact({email:email,help:help})
        me.save().then(()=>{
            console.log("message Added")
            res.status(200).json({success:true, message:"Sent!!!"})
        }).catch((err)=>{
            console.log(err)
        })
})
router.get('/contact/all',function(req,res){
    Contact.find().then(function(data){
        res.status(200).json({data,success:true, message:"showed!!!"})
        console.log("showed")
    }).catch(function(e){
        res.status(500).json({error:e})
        console.log("not")
    })
})
router.delete('/delete/contact/:id',function(req,res){
    const id=req.params.id;
    Contact.deleteOne({_id : id}).then(function(){
        res.status(200).json({success:true,message:"Contact deleted"})
        console.log("deleted!!")
    });

})

module.exports= router