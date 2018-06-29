const fs = require('fs');

// fs.ReadStream extend from stream.Readable
const stream = new fs.ReadStream('big.html');

stream.on('readable', function () {
    let data = stream.read();
    console.log(data.length);
});

stream.on('end', function () {
    console.log('END')
});