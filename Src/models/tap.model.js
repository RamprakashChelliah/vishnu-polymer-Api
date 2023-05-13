// libray Import
const fs = require('fs');
const path = require("path");

function getTaps(searchText){
    let tapList = getFile();
    if(searchText !== null && searchText !== undefined && searchText !== ""){
        return tapList.filter(x => x.tapName.toLower().includes(searchText.toLower()))
    }
    return tapList;
}

function addNewTap(tapType, tapName, amount){
    var tapList = getFile();
    var isExistData = tapList.find(x => x.tapType === tapType && x.tapName === tapName);
    if(isExistData) return false;

    let count = 0
    tapList.forEach(element => {
        count++;
    });

    // set tap data's
    let tapData = {
        id: count + 1,
        tapType: tapType,
        tapName: tapName,
        amount: amount
    }
    tapList.push(tapData);
    writeFile(tapList);
    return tapData;
}

function updateTap(id, tapName, amount){
    var tapList = getFile();

    var isExistData = tapList.find(x => x.id === id);
    if(isExistData === null) return false;

    // var entryList = getEntryFile();
    // var alreadyUsedtapType = entryList.find(x => x.tapType === isExistData.tapType);
    // if(alreadyUsedtapType) return "Tap detail was already used in some entries"
    
    isExistData.tapName = tapName;
    isExistData.amount = amount;

    writeFile(tapList);
    return true;
}

function deleteTap(id){
    var tapList = getFile();
    var isExistData = tapList.find(x => x.id === id);
    if(isExistData === null) return false;
    
    // var entryList = getEntryFile();
    // var alreadyUsedtapType = entryList.find(x => x.tapType === isExistData.tapType);
    // if(alreadyUsedtapType) return "Tap detail was already used in some entries"

    let indexPosition = tapList.indexOf(isExistData);
    tapList.splice(indexPosition);

    writeFile(tapList);
    return true;
}

//get entry file
function getEntryFile(){
    let fileName = path.join(__dirname, '..', 'data', 'entry-details.txt');
    return readFile(fileName);
}


function getFile(){
    let fileName = path.join(__dirname, '..', 'data', 'tap-details.txt');
    return readFile(fileName);
}

function readFile(filePath) {
    let tapDatas = fs.readFileSync(filePath);
    return JSON.parse(tapDatas);
}


// write content into file
function writeFile(content) {
    let filePath = path.join(__dirname, '..', 'data', 'tap-details.txt');
    fs.writeFileSync(filePath, JSON.stringify(content));
    return true;
}

module.exports = {
    getTaps,
    addNewTap,
    updateTap,
    deleteTap
}