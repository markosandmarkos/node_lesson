let http = require('http');

const server = new http.Server(); // EventEmitter

server.listen(3005, '127.0.0.1');

server.on('request', function (req, res) {
    res.end('Barev');
});