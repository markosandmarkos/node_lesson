var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

// // Error
//
// server.on('error' , function (request) {
//     console.log(request)
// });
//
// server.emit('error' , new Error('404'));
//
// // Request
//
// server.on('request', function (request) {
//     request.approved = true;
// });
//
// server.on('request', function (request) {
//     console.log(request);
// });
//
// server.emit = ('request', {from: "Client"});
//
// server.emit = ('request', {from: "Another Client"});