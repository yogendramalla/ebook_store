const express = require('express');
const Product  = require('../models/Product');
const router = express.Router();

router.route('/').get((req,res,next)=>{//Getting  All product item from database
    Product.find({})
    .populate({path: 'store'})
    .populate({path: 'category'})
    .then((product)=>{
      
        res.status(200).json(product);

    })
    .catch((err)=>next(err));

}).post((req,res,next)=>{//inserting  new product item to the database
    Product.create({
        productname:req.body.productname,
        price: req.body.price,
        productimage:req.body.productimage,
        store:req.body.store,
        category:req.body.category
    })
    .then((product)=>{
 
        res.status(200).json({product,message:"Product Added"});
        console.log("product added")
    })
    .catch((err) => {console.log("cannot add")}
    );
}).put((req,res,next)=>{
    res.statusCode=201;
    res.json("You cannot update Product");

})

 //Deleting  All product item from database
.delete((req,res,next)=>{
    // Product.deleteMany({})
    // .then((product)=>{
    //     res.json(product);

    // })
    res.statusCode=201;
    res.json("You cannot delete all Product");
});

 //Getting particular product iteam by id from database
 router.route('/:id')
  .get((req,res,next)=>{
    Product.findById(req.params.id)
    .populate({path: 'store'})
    .populate({path: 'category'})
     .then((product)=>{
        res.json(product);
     })
     .catch((err) => next(err));
 })
 .post((req,res,next)=>{
     res.statusCode=201;
     res.json("You cannot add product on here");
 })
 //Updating the particular product item by id

 .put((req,res,next)=>{
     Product.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
     .then((product)=>{
         res.json(product);
     })
     .catch((err)=> next(err));
 })

 // Deleting particular product by id

 .delete((req,res,next)=>{
     Product.findByIdAndDelete(req.params.id)
     .then((product)=>{
         res.json(product);
     })
     .catch((err)=> next(err));
 })

 //search product by category with id
 router.get('/searchByCat/:catId', (req, res, next)=>{
    Product.find({category: req.params.catId})
    .populate({path:'category'})
    .then((product) => {
       res.json(product);
   })
   .catch((err) => next(err));
})

//search product by store id
router.get('/searchByRes/:resId', (req, res, next)=>{
   Product.find({store: req.params.resId})
   .populate({path:'store'})
   .then((product) => {
      res.json(product);
      console.log("showed")
  })
  .catch((err) =>{ next(err)
    console.log("sorry cannot show")
});
})

//search product by name
router.get('/searchByName/:name', (req, res, next)=>{
    console.log(req.params.name)
   Product.find({productname: new RegExp(req.params.name, 'i')})
    .then((product) => {
        res.json({product:product});
        })
    .catch((err) => next(err));
})

router.get('/product/singleshow/:id',
//auth.verifyUser,
function(req,res){
    const product_id = req.params.id;
    Product.findOne({_id:product_id}).then((data)=>{
        console.log("go")
        res.status(200).json({data})
    }).catch((err)=>{
        console.log("sorry")
        res.status(200).json(err)
    })
})

module.exports= router;


