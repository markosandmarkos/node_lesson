const lang = require('../db');
lang.connect();
class Index {

    constructor(name) {
        this.name = name;
    }

    hello (who) {
        console.log(lang.getPhrases('Hello') + ' ' + lang.getPhrases('Name'));
    }

}

module.exports = Index;

