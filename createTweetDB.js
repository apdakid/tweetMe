var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('twitterDB.db');

db.serialize(function () {
//see this link for syntax: https://github.com/kripken/sql.js/commit/413e139526b49619aee1d390c89a2cd6150d420f

var cmdTweet = "CREATE TABLE IF NOT EXISTS tweet ("+
"  tweet_id NOT NULL,"+
"  tweet_text TEXT NOT NULL,"+
"  created_at datetime NOT NULL,"+
"  user_name text NOT NULL, "+
"  PRIMARY KEY (tweet_id), " +
" FOREIGN KEY (user_name) REFERENCES user(user_name)) ";
  
//   console.log(cmdTweet);

   db.run(cmdTweet);

var cmdUser = "CREATE TABLE IF NOT EXISTS user ("+
"  user_name NOT NULL,"+
"  added_at datetime NOT NULL,"+
"  name TEXT DEFAULT NULL, " +
"  PRIMARY KEY (user_name) ) ";
  
//create follower/following linkage TABLE
var cmdFollow = "CREATE TABLE IF NOT EXISTS follow ("+
    " user_name Text NOT NULL, "+
    " following_name TEXT, " +
    " FOREIGN KEY(user_name) REFERENCES user(user_name), " +
    " FOREIGN KEY(user_name) REFERENCES tweet(user_name))";
//   console.log(cmdTweet);

   db.run(cmdUser);
   db.run(cmdFollow);

  //  db.run("INSERT INTO tweet VALUES (?, ?)", ['jack', 'this is new']);
  // db.run("INSERT INTO tweet VALUES (?, ?)", ['jill', 'so whats new about that']);
  // db.run("INSERT INTO tweet VALUES (?, ?)", ['john', 'start over please']);

//    db.each("SELECT * FROM tweet", function (err, row) {
//     console.log(row);
//     console.log("printed")
//   });
});

db.close();





