let User = require('./user');

function customRun() {
    const vasya = new User('Vasya');
    const petya = new User('Petya');
    vasya.hello(petya);

}

if(module.parent) {
    exports.customRun = customRun;
} else {
    customRun();
}