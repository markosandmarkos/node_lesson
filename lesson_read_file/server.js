const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const ROOT = __dirname + "/public";

const err404 = 'Error 404: file not found';

http.createServer(function (req, res) {

    if (!checkAccess(req)) {
        res.statusCode = 403;
        res.end("Tell me the secret to access!");
        return;
    }

    sendFileSecret(url.parse(req.url).pathname, res);

}).listen(3006);

function checkAccess(req) {
    return url.parse(req.url, true).query.secret === 'Martin';
}

function sendFileSecret(filePath, res) {

    try {
        filePath = decodeURIComponent(filePath); // encoding example. %D1%8F -> rus Я
    } catch (e) {
        res.statusCode = 404;
        res.end(err404);
        return false;
    }

    if (~filePath.indexOf('\0')) { // if \0 exist in url, its will be node error
        res.statusCode = 400;
        res.end("Bad url");
        return false;
    }

    // normalize -> remove all . or / or .. or // from url, join -> concat urls
    filePath = path.normalize(path.join(ROOT, filePath));

    if (filePath.indexOf(ROOT) !== 0) {
        res.statusCode = 404;
        res.end(err404);
        return false;
    }

    fs.stat(filePath, function (err, stats) { // if file empty then fs.stat returns err
        if (err || !stats.isFile()) { // if its file
            res.statusCode = 404;
            res.end(err404);
            return false;
        }
    });

    sendFile(filePath, res);

}

function sendFile(filePath, res) {
    fs.readFile(filePath, function (err, content) {
        if (err) throw err;
        const mime = require('mime');

        res.setHeader('Content-type', mime.getType(filePath) + "; charset=utf-8"); // setting headers
        res.end(content);
    })
}

