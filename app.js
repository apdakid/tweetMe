var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db');
var prompt = require('prompt-sync')();

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/foo', function (req, res) {
    res.send('yo');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
initDB(db);

// var fs = require('fs');
// var os = require('os');
// function getUser(name) {
//     return new Promise(
//         (resolve, reject) => {
//             fs.getUser(name, function (err, contents) {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 resolve(name);
//             });
//         }
//     );
// }
// function writeFile(name, contents) {
//     return new Promise(
//         (resolve, reject) => {
//             fs.writeFile(name, contents, function (err) {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 resolve('success');
//             });
//         })
// }
// var p = readFile('file.txt', 'utf8');
// p.then(
//     (val) => {
//         var array = val.split("\n");
//         array.sort();
//         var success = writeFile('out.txt', array.join(os.EOL));
//         return success;
//     }).then(
//     (val) => {
//         console.log(val);
//     }).catch((err) => {
//         console.log(err);        // handle all possible problems    
    });
db.all()
db.close();