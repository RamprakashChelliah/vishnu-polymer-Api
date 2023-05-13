// libray Import
const fs = require('fs');
const path = require("path");

function getEntries(searchText){
    let entryList = getFile();
    if(searchText !== null && searchText !== undefined && searchText !== ""){
        return entryList.filter(x => x.tapName.includes(searchText))
    }
    return entryList;
}

function addNewEntry(tapType, tapName, date, quantity, receiver, amount){
    var exitlist = getFile();

    let count = 0
    exitlist.forEach(element => {
        count++;
    });

    // set entry data's
    let entryData = {
        id: count + 1,
        tapType: tapType,
        tapName: tapName,
        date: date,
        receiver: receiver,
        quantity: quantity,
        amount: amount
    }
    exitlist.push(entryData);
    writeFile(exitlist);
    return true;
}

function updateEntry(id, tapName, date, quantity, receiver, amount){
    var exitlist = getFile();

    var isExistData = exitlist.find(x => x.id == id);
    if(isExistData === null || isExistData === undefined) return false;

    isExistData.tapName = tapName;
    isExistData.date = date;
    isExistData.receiver = receiver;
    isExistData.quantity = quantity;
    isExistData.amount = amount;

    writeFile(exitlist);
    return true;
}

function deleteEntry(id){
    var exitlist = getFile();
    var isExistData = exitlist.find(x => x.id === id);
    if(isExistData === null) return false;
    
    let indexPosition = exitlist.indexOf(isExistData);
    exitlist.splice(indexPosition);

    writeFile(exitlist);
    return true;
}

function getFile(){
    let fileName = path.join(__dirname, '..', 'data', 'exit-details.txt');
    return readFile(fileName);
}

function readFile(filePath) {
    let tapDatas = fs.readFileSync(filePath);
    return JSON.parse(tapDatas);
}


// write content into file
function writeFile(content) {
    let filePath = path.join(__dirname, '..', 'data', 'exit-details.txt');
    fs.writeFileSync(filePath, JSON.stringify(content));
    return true;
}

module.exports = {
    getEntries,
    addNewEntry,
    updateEntry,
    deleteEntry
}