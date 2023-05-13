// 3rd party Import
const express = require('express');

// local Import
const {GetExitDetails, AddNewEntry, UpdateExitDetail, DeleteExitDetail} = require('./exit-detail.controller');

// creat route
const exitDetailRouter = express.Router();

// routes
exitDetailRouter.get('/', GetExitDetails);
exitDetailRouter.post('/', AddNewEntry);
exitDetailRouter.put('/:id', UpdateExitDetail);
exitDetailRouter.delete('/:id', DeleteExitDetail);

module.exports = {
    exitDetailRouter
}