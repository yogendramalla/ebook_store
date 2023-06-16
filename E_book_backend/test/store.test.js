const express = require('express');
require('dotenv').config();
const storeRouter = require('../models/Store');
var ObjectId = require('mongodb').ObjectID;

// Setup
require('./setup');
//Add store
describe('Test of Store Route', () => {
    test('it should add a new store',()=>{
        return storeRouter.create({    
            _id: ObjectId('6026324d4eccbc17b88a9aeb'),
            store_name:'KFC',
            store_address: 'New Baneshwor', 
            store_image: 'imageKFC.jpg'
        }).then((Response)=>{
            expect(Response.store_name).toBe('KFC')
            expect(Response.store_address).toBe('New Baneshwor')
            expect(Response.store_image).toBe('imageKFC.jpg')    
        })
    })
    //show store
    test('it should retrieve the store details',()=>{
        return storeRouter.findById({_id: ObjectId('6026324d4eccbc17b88a9aeb')})
        .then((Response)=>{
            expect(Response.store_name).toBe('KFC')
            expect(Response.store_address).toBe('New Baneshwor')
            expect(Response.store_image).toBe('imageKFC.jpg')    
        })
    })
    //update store
    test('it should update the store details',()=>{
        return storeRouter.findByIdAndUpdate({_id: ObjectId('6026324d4eccbc17b88a9aeb')},
        {
            store_name:'Bajeko Sekuwa',
            store_address: 'Putali Sadak', 
            store_image: 'imageBajekoSekuwa.jpg'
        }, {new: true})
        .then((Response)=>{
            expect(Response.store_name).toBe('Bajeko Sekuwa')
            expect(Response.store_address).toBe('Putali Sadak')
            expect(Response.store_image).toBe('imageBajekoSekuwa.jpg')    
        })
    })
    //delete
    test('it should delete the store',()=>{
        return storeRouter.findByIdAndDelete({_id: ObjectId('6026324d4eccbc17b88a9aeb')})
        .then((Response)=>{
            expect(Response._id).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
        })
    })
})