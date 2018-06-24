let util = require('util');

// ES5
function Animal (name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log('Walk ' + this.name);
};

function Rabbit (name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function () {
    console.log('Jump ' + this.name);
};

var rabbit = new Rabbit('Krolik');

rabbit.jump();
rabbit.walk();

// ES6

class Animals {
    constructor(name) {
        this.name = name;
    }
    walk () {
        console.log('Walking ' + this.name);
    }
}

class Dog extends Animals {
    constructor(name) {
        super(name);
        this.name = name;
    }
    jump() {
        console.log('Jumping ' + this.name);
    }
}

const dog = new Dog('Gaf');
dog.jump();
dog.walk();
