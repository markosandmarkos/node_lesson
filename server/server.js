/*
* Request to server
* if "url = localhost/query?message=Martin"
* then response to client that message,
* else response message "page not found
* */

let http = require('http');
let url = require('url');

const server = new http.Server(function (req, res) {

    let parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/echo' && parsedUrl.query.message === 'Martin') {

        res.end(parsedUrl.query.message);

    } else if (parsedUrl.pathname === '/favicon.ico') {
        res.end();

    } else {
        res.statusCode = 404;
        res.end('Error 404: Page not found');
    }
}); // EventEmitter

server.listen(3001, '127.0.0.1');

