const db = require('db');

class Index {

    constructor(name) {
        this.name = name;
    }

    hello (who) {
        console.log(db.getPhrases('Hello') + ' ' + db.getPhrases('name'));
    }

}

module.exports = Index;

