let myDb;

exports.connect = function () {
    myDb = require('./ru');
};

exports.getPhrases = name => {
    if(!myDb[name]) {
        throw new Error("Error ka axper jan ");
    }
    return myDb[name];
};