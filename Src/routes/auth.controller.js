const {checkUserExist, registerNewuser, getUsers, resetPassword} = require('../models/auth.model');

function GetUserDetails(req, res){
    return res.status(200).json(getUsers());   
}

//check email id is already exist or not
function ChangePassword(req, res){
    let userData = resetPassword(req.body.email, req.body.password);
    if(userData === 'User not found with email id'){
        return res.status(400).json({error:"User not found with email id"});
    }
    if(userData === false){
        return res.status(400).json({error:"Password changed successfully!"});
    }
}

// get call to get all planets
function CheckUserExistDetail(req, res){
    let isExistUser = checkUserExist(req.body.email, req.body.password);
    if(isExistUser === false){
        return res.status(400).json({error:"User already exist"});
    }
    return res.status(200).json("User logged in successfully!");
}

function RegisterUserDetail(req, res){
    let isNewUser = registerNewuser(req.body.username, req.body.email, req.body.password);
    if(isNewUser === false){
        return res.status(400).json({error:"User already exist"});
    }
    return res.status(200).json("Account created successfully!");
}

module.exports = {
    GetUserDetails,
    CheckUserExistDetail,
    RegisterUserDetail,
    ChangePassword
}