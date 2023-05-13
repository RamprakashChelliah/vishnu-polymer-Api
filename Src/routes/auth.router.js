// 3rd party Import
const express = require('express');

// local Import
const {RegisterUserDetail, CheckUserExistDetail, ChangePassword} = require('./auth.controller');


// creat route
const authRouter = express.Router();

// routes
authRouter.post('/login', CheckUserExistDetail);
authRouter.post('/register', RegisterUserDetail);
authRouter.put('/password-reset', ChangePassword);

module.exports = {
    authRouter
}