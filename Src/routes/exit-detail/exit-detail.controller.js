const {getEntries, addNewEntry, updateEntry, deleteEntry} = require('../../models/exit.model');


function GetExitDetails(req, res){
    return res.status(200).json(getEntries(req.query.searchText));   
}

function AddNewEntry(req, res){
    addNewEntry(req.body.tapType, req.body.tapName, req.body.date, req.body.quantity,
         req.body.receiver, req.body.amount);
    return res.status(200).json("Exit details added successfully!");
}

function UpdateExitDetail(req, res){
    let isExistEntry = updateEntry(req.params.id, req.body.tapName, req.body.date, req.body.quantity,
         req.body.receiver, req.body.amount);
    if(isExistEntry === false){
        return res.status(400).json({error:"Exit details not found"});
    }
    return res.status(200).json("Exit details updated successfully!");
}

function DeleteExitDetail(req, res){
    let isEntryDeleted = deleteEntry(req.params.id);
    if(isEntryDeleted === false){
        return res.status(400).json({error:"Exit details not found"});
    }
    return res.status(200).json("Exit details deleted successfully!");
}

module.exports = {
    GetExitDetails,
    AddNewEntry,
    UpdateExitDetail,
    DeleteExitDetail
}
