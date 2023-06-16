const express = require('express');
require('dotenv').config();
const CategoryRouter = require('../models/Category');
var ObjectId = require('mongodb').ObjectID;

// Setup
require('./setup');

describe('Test of Product Category Route', () => {
    test('it should add a new prd category',()=>{
        return CategoryRouter.create({  
            _id:ObjectId('6026324d9243b507d0df744c'),  
            category:'Products',
            catImg: 'imageChickenWings.jpg', 
        }).then((Response)=>{
            expect(Response.category).toBe('Products')
            expect(Response.catImg).toBe('imageChickenWings.jpg')    
        })
    })

    test('it should retrieve the prd category details',()=>{
        return CategoryRouter.findById({_id:ObjectId('6026324d9243b507d0df744c')})
        .then((Response)=>{
            expect(Response.category).toBe('Products')
            expect(Response.catImg).toBe('imageChickenWings.jpg')    
        })
    })

    test('it should update the prd category details',()=>{
        return CategoryRouter.findByIdAndUpdate({_id:ObjectId('6026324d9243b507d0df744c')},
        {  
            category:'Drinks',
            catImg: 'imageCoca-Cola.jpg', 
        }, {new: true})
        .then((Response)=>{
            expect(Response.category).toBe('Drinks')
            expect(Response.catImg).toBe('imageCoca-Cola.jpg')    
        })
    })

    test('it should delete the prd category',()=>{
        return CategoryRouter.findByIdAndDelete({_id:ObjectId('6026324d9243b507d0df744c')})
        .then((Response)=>{
            expect(Response._id).toStrictEqual(ObjectId('6026324d9243b507d0df744c'))
        })
    })
})