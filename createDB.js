var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('tweetDB.db');

db.serialize(function () {
  db.run("CREATE TABLE tweet (col1, col2)");

   db.run("INSERT INTO tweet VALUES (?, ?)", ['jack', 'this is new']);
  db.run("INSERT INTO tweet VALUES (?, ?)", ['jill', 'so whats new about that']);
  db.run("INSERT INTO tweet VALUES (?, ?)", ['john', 'start over please']);

   db.each("SELECT * FROM tweet", function (err, row) {
    console.log(row);
  });
});
db.close();

db.serialize(function () {
  db.each("SELECT * FROM tweet", function (err, row) {
    console.log(row);
  });
});



