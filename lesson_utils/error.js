const util = require('util');

var phrases = {
    "Hello": 'Barev',
    "world": 'Ashxarh'
};

function  PhraseError (message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}

util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError (status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, PhraseError);

}

util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function getPhrase (name) {
    if(!phrases[name]) {
        throw new PhraseError('Chka ' + name);
    }
    return phrases[name];
}

function makePage (url) {
    if(url != 'index.html') {
        throw new PhraseError('Chka tenc url ' + url);
    }
    return util.format('%s %s!' , getPhrase('Hello'), getPhrase('world'))
}

var page = makePage('index.html');
console.log(page);
