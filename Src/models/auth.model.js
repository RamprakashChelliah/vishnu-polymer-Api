// libray Import
const fs = require('fs');
const path = require("path");

function getUsers(){
    return getFile();
}

// check user is login or not
function checkUserExist(email, password) {
    let usersList = getFile();

    // check login or not
    let userLoginData = usersList.find(x => x.email === email && x.password === password);
    if (userLoginData)
    {
        //Add user to logged user file
        //writeLoggedUsersFile(email, password);
        return true;
    }
    else return false;
}

function resetPassword(email, psw) {
    let usersList = getFile();

    // check user email is exit or not
    let userData = usersList.find(x => x.email === email);
    if(userData === null || userData === undefined){
        return "User not found with email id"
    }

    userData.password = psw;
    let fileName = path.join(__dirname, '..', 'data', 'user-details.txt');
    writeFile(fileName, userData);
    return 'Password changed successfully!'
}

// reginster new user
function registerNewuser(username, email, password) {
    let usersList = getFile();

    // check user alrady exist or not
    let isuserAlreadyExist = usersList.find(x => x.email === email)
    if (isuserAlreadyExist) return false;

    // register new user
    let userData = {
        email: email,
        username: username,
        password: password
    }
    usersList.push(userData)
    let fileName = path.join(__dirname, '..', 'data', 'user-details.txt');
    writeFile(fileName, usersList);
    return 'New user created!'
}

// function removeUserFromLoggedUsersFile(email){
//     let filePath = path.join(__dirname, '..', 'data', 'currently-logged-users.txt');
//     let userDetails = readFile(filePath);

//     let isExistUser = userDetails.find(x => x.email === email);
//     if(isExistUser){
//         let indexPosition = userDetails.indexOf(isExistUser);
//         userDetails.splice(indexPosition);
//         return true;
//     }
// }

// read file content

function readFile(filePath) {
    let userDatas = fs.readFileSync(filePath);
    return JSON.parse(userDatas);
}

// write content into file
function writeFile(filePath, content) {
    fs.writeFileSync(filePath, JSON.stringify(content));
    return true;
}

function getFile(){
    let fileName = path.join(__dirname, '..', 'data', 'user-details.txt');
    return readFile(fileName);
}

// function writeLoggedUsersFile(email){
//     let filePath = path.join(__dirname, '..', 'data', 'currently-logged-users.txt');
//     let userDetails = readFile(filePath);
//     let isuserAlreadyExist = userDetails.find(x => x.email === email)

//     if(isuserAlreadyExist) return;

//     userDetails.push({
//         email: email
//     });
//     fs.writeFileSync(filePath, JSON.stringify(userDetails));
//     return true;
// }

module.exports = {
    getUsers,
    checkUserExist,
    registerNewuser,
    resetPassword
};