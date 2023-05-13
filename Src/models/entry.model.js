// libray Import
const fs = require('fs');
const path = require("path");

function getEntries(searchText){
    let entryList = getFile();
    if(searchText !== null && searchText !== undefined && searchText !== ""){
        return entryList.filter(x => x.tapName === searchText)
    }
    return entryList;
}

function addNewEntry(tapType, tapName, date, quantity, amount){
    var entryList = getFile();

    let count = 0
    entryList.forEach(element => {
        count++;
    });

    // set entry data's
    let entryData = {
        id: count + 1,
        tapType: tapType,
        tapName: tapName,
        date: date,
        quantity: quantity,
        amount: amount
    }
    entryList.push(entryData);
    writeFile(entryList);
    return true;
}

function updateEntry(id, tapName, date, quantity, amount){
    var entryList = getFile();

    var isExistData = entryList.find(x => x.id == id);
    if(isExistData === null) return false;
    
    isExistData.tapName = tapName;
    isExistData.date = date;
    isExistData.quantity = quantity;
    isExistData.amount = amount;

    writeFile(entryList);
    return true;
}

function deleteEntry(id){
    var entryList = getFile();
    var isExistData = entryList.find(x => x.id === id);
    if(isExistData === null) return false;
    
    let indexPosition = entryList.indexOf(isExistData);
    entryList.splice(indexPosition);

    writeFile(entryList);
    return true;
}

function getFile(){
    let fileName = path.join(__dirname, '..', 'data', 'entry-details.txt');
    return readFile(fileName);
}

function readFile(filePath) {
    let tapDatas = fs.readFileSync(filePath);
    return JSON.parse(tapDatas);
}


// write content into file
function writeFile(content) {
    let filePath = path.join(__dirname, '..', 'data', 'entry-details.txt');
    fs.writeFileSync(filePath, JSON.stringify(content));
    return true;
}

module.exports = {
    getEntries,
    addNewEntry,
    updateEntry,
    deleteEntry
}