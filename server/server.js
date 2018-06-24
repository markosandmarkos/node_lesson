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

    if (parsedUrl.pathname === '/echo' && parsedUrl.query.message === 'Martin' && req.method === 'GET') {

        // first method headers control( headers sends with response when called res.end() )
        res.setHeader('cache-control', 'no-cache'); // disable cache

        // second method , called immediately.
        // res.writeHead(200, "OK", {"Cache-control": "no-cache"});

        res.end('Barev ' + parsedUrl.query.message);

    } else if (parsedUrl.pathname === '/favicon.ico') {
        res.end();
    } else {
        res.statusCode = 404;
        res.end('Error 404: Page not found');
    }
}); // EventEmitter

server.listen(3001, '127.0.0.1');

