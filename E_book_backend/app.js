const express = require('express');
const mongoose = require('mongoose');
const db=require('./database/db')
const userRouter = require('./routes/user');
const uploadRouter = require('./routes/uploads');
const foodCat = require('./routes/Category');
const storeRouter = require('./routes/Store');
const food = require('./routes/Product');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');
const vieworder=require('./routes/vieworder')
const auth = require('./auth');
const contact=require('./routes/contact')
const app = express();
const path = require("path");
const PORT=process.env.PORT || 5000;
const cors = require('cors');
const dotenv = require("dotenv").config();


   


  app.use(express.static(__dirname + "/public"));
  app.options('*', cors());
  app.use(cors());
  app.use(express.json());

  app.use('/users',userRouter);
  app.use('/upload',uploadRouter);
  app.use('/Cat',foodCat);
  app.use('/stores',storeRouter);
  app.use('/products', food);
  app.use(vieworder)
  app.use(contact)

  app.use(auth.verifyUser);
  app.use('/cart',cartRouter);
  app.use('/order',orderRouter);
 
  //hosting
  if(process.env.NODE_ENV === 'production'){
    app.use(express.static('food/build'));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "food","build", "index.html"));
    });
  }

  //Listening to Port

  app.listen(PORT, ()=>{
console.log(`App is running at localhost: ${PORT}`);
});