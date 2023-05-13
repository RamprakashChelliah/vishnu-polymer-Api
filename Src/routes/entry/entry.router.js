// 3rd party Import
const express = require('express');

// local Import
const {GetEntryDetails, AddNewEntry, UpdateEntryDetail, DeleteEntryDetail} = require('./entry.controller');

// creat route
const entryRouter = express.Router();

// routes
entryRouter.get('/', GetEntryDetails);
entryRouter.post('/', AddNewEntry);
entryRouter.put('/:id', UpdateEntryDetail);
entryRouter.delete('/:id', DeleteEntryDetail);

module.exports = {
    entryRouter
}