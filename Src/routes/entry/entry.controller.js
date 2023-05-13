const {getEntries, addNewEntry, updateEntry, deleteEntry} = require('../../models/entry.model');


function GetEntryDetails(req, res){
    return res.status(200).json(getEntries(req.query.searchText));   
}

function AddNewEntry(req, res){
    addNewEntry(req.body.tapType, req.body.tapName, req.body.date, req.body.quantity, req.body.amount);
    return res.status(200).json("Entry details added successfully!");
}

function UpdateEntryDetail(req, res){
    updateEntry(req.params.id, req.body.tapName, req.body.date, req.body.quantity, req.body.amount);
    return res.status(200).json("Entry details updated successfully!");
}

function DeleteEntryDetail(req, res){
    let isEntryDeleted = deleteEntry(req.params.id);
    if(isEntryDeleted === false){
        return res.status(400).json({error:"Entry details not found"});
    }
    return res.status(200).json("Entry details deleted successfully!");
}

module.exports = {
    GetEntryDetails,
    AddNewEntry,
    UpdateEntryDetail,
    DeleteEntryDetail
}
