const db = require('db');
const User = require('./user');
const log = require('logger')(module);

db.connect();

function customRun() {
    const vasya = new User('Vasya');
    const petya = new User('Petya');
    vasya.hello(petya);
    log(db.getPhrases('name'));

}

if(module.parent) {
    exports.customRun = customRun;
} else {
    customRun();
}