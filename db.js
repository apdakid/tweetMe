var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('twitter.db');
app.get('/', function(req, res) {
    res.send('Welcome to A&H Twitter!');
});
app.get('/foo', function(req, res) {
    res.send('yo');
});
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
initDB(db);

function initDB(db) {
    db.serialize(function() {
        db.run("CREATE TABLE twitter (info TEXT)");
        var stmt = db.prepare("INSERT INTO twitter VALUES (?)");
        for (var i = 0; i < 10; i++) {
            stmt.run("Tweet " + i);
        }
        stmt.finalize();
        db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
            if (err) {
                console.log(err);
            }
            console.log(row.id + ": " + row.info);
        });
    });
}
db.close();