const {getTaps, addNewTap, updateTap, deleteTap} = require('../../models/tap.model');


function GetTapDetails(req, res){
    return res.status(200).json(getTaps(req.query.searchText));   
}

function AddNewTap(req, res){
    let isNewTap = addNewTap(req.body.tapType, req.body.tapName, req.body.amount);
    if(isNewTap === false){
        return res.status(400).json({error:"Tap name already exist with same tap type"});
    }
    return res.status(200).json(isNewTap);
}

function UpdateTapDetail(req, res){
    let isTapDeleted = updateTap(req.params.id, req.body.tapName, req.body.amount);
    if(isTapDeleted === 'Tap detail was already used in some entries'){
        return res.status(400).json({error:"Tap detail was already used in some entries"});
    }
    if(isTapDeleted === false){
        return res.status(400).json({error:"Tap details not found"});
    }
    return res.status(200).json("Tap details updated successfully!");
}

function DeleteTapDetail(req, res){
    let isTapDeleted = deleteTap(req.params.id);
    if(isTapDeleted === 'Tap detail was already used in some entries'){
        return res.status(400).json({error:"Tap detail was already used in some entries"});
    }
    if(isTapDeleted === false){
        return res.status(400).json({error:"Tap details not found"});
    }
    return res.status(200).json("Tap details deleted successfully!");
}

module.exports = {
    GetTapDetails,
    AddNewTap,
    UpdateTapDetail,
    DeleteTapDetail
}
