const fs = require('fs');

// __filename - path to current file

// fs.readFile(__filename, {encoding: 'utf-8'} , function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

fs.readFile(__filename, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.toString());
        console.log(data.toString('utf-8'));
    }
});

fs.stat(__filename, function (err, stats) { // check if file or dir exists and its file or dir
    console.log(stats.isFile());
    console.log(stats)
});

fs.writeFile("someFileName.tmp", "data", function (err) { // create new file
    if (err) throw err;
    fs.rename("someFileName.tmp", "fileNewName.tmp", function (err) { // rename file
        if (err) throw err;
        fs.unlink("fileNewName.tmp", function () { // delete file
            if (err) throw err;
        })
    })
});