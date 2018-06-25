const http = require('http');
const fs = require('fs');

/**
 * Sync example
 * */

// http.createServer(function (req, res) {
//     let info;
//     if(req.url === '/') {
//         try {
//             info = fs.readFileSync('lesson_async_node/info.json');
//         } catch (err) {
//             console.error(err);
//             res.statusCode = 500;
//             res.end("Internal server error");
//             return;
//         }
//         res.end(info);
//     }
//
// }).listen(3002);

/**
 * Async example
 * */

http.createServer(function (req, res) {

    if (req.url === '/') {
        fs.readFile('lesson_async_ode/info.json', function (err, info) {

            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("Internal server error");
                return;
            }

            res.end(info);

        });
    }

}).listen(3003);