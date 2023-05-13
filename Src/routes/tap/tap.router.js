// 3rd party Import
const express = require('express');

// local Import
const {GetTapDetails, AddNewTap, DeleteTapDetail, UpdateTapDetail} = require('./tap.controller');

// creat route
const tapRouter = express.Router();

// routes
tapRouter.get('/', GetTapDetails);
tapRouter.post('/', AddNewTap);
tapRouter.put('/:id', UpdateTapDetail)
tapRouter.delete('/:id', DeleteTapDetail)

module.exports = {
    tapRouter
}