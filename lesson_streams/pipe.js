const http = require('http');
const fs = require('fs');


// new http.Server(function (req, res) {
//     console.log(req.url);
//     if (req.url === '/big.html') {
//         fs.readFile('big.html', function (err, content) {
//             if (err) {
//                 res.statusCode = 500;
//                 res.end('Internal Server Error');
//             } else {
//                 res.end(content);
//             }
//         })
//     }
// }).listen(3007);





// How to works PIPE

// new http.Server(function (req, res) {
//     console.log(req.url);
//     if (req.url === '/big.html') {
//         let file = fs.ReadStream('big.html');
//         sendFile(file, res);
//     }
// }).listen(3007);
//
// function sendFile(file, res) {
//
//     file.on('readable', write);
//
//     function write() {
//
//         const fileContent = file.read();
//
//         if (fileContent && !res.write(fileContent)) {
//             file.removeListener('readable', write);
//             res.once('drain', function () {
//                 file.on('readable', write);
//                 write();
//             })
//         }
//     }
//
//     file.on('end', function () {
//         res.end();
//     })
// }




//pipe example

new http.Server(function (req, res) {
    console.log(req.url);
    if (req.url === '/big.html') {
        let file = fs.ReadStream('big.html');
        sendFilePipe(file, res);
    }
}).listen(3007);

function sendFilePipe(file, res) {

    file.pipe(res);

    file
        .on('open', function () {
            console.log('Open')
        })
        .on('close', function () { // when closed success
            console.log('Close')
        });

    res.on('close', function () { // when connection aborted
        file.destroy();
    })

}

