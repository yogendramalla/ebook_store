const express = require('express');
require('dotenv').config();
const productRouter = require('../models/product');
var ObjectId = require('mongodb').ObjectID;

// Setup
require('./setup');

describe('Test of Food Route', () => {
    test('it should add a new product',()=>{
        return productRouter.create({  
            _id:ObjectId('6029647169d6ad1e1ce02835'),  
            productname:'Burger',
            price: '250', 
            category: ObjectId('6026324d9243b507d0df744f'), 
            store: ObjectId('6026324d4eccbc17b88a9aeb'), 
            productimage: 'imageBurgerHouse.jpg'
        }).then((Response)=>{
            expect(Response.productname).toBe('Burger')
            expect(Response.price).toBe('250')
            expect(Response.category).toStrictEqual(ObjectId('6026324d9243b507d0df744f'))
            expect(Response.store).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
            expect(Response.productimage).toBe('imageBurgerHouse.jpg') 
        })
    })

    test('it should retrieve the product details',()=>{
        return productRouter.findById({_id:ObjectId('6029647169d6ad1e1ce02835')})
        .then((Response)=>{
            expect(Response.productname).toBe('Burger')
            expect(Response.price).toBe('250')
            expect(Response.category).toStrictEqual(ObjectId('6026324d9243b507d0df744f'))
            expect(Response.store).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
            expect(Response.productimage).toBe('imageBurgerHouse.jpg') 
        })
    })

    test('it should update the product',()=>{
        return productRouter.findByIdAndUpdate({_id:ObjectId('6029647169d6ad1e1ce02835')},
        {  
            productname:'Burgers',
            price: '350', 
            category: ObjectId('6026324d9243b507d0df744f'), 
            store: ObjectId('6026324d4eccbc17b88a9aeb'), 
            productimage: 'imageBurgerHouses.jpg'
        }, {new: true})
        .then((Response)=>{
            expect(Response.productname).toBe('Burgers')
            expect(Response.price).toBe('350')
            expect(Response.category).toStrictEqual(ObjectId('6026324d9243b507d0df744f'))
            expect(Response.store).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
            expect(Response.productimage).toBe('imageBurgerHouses.jpg') 
        })
    })

    test('it should delete the product',()=>{
        return productRouter.findByIdAndDelete({_id:ObjectId('6029647169d6ad1e1ce02835')})
        .then((Response)=>{
            expect(Response._id).toStrictEqual(ObjectId('6029647169d6ad1e1ce02835'))
        })
    })
})