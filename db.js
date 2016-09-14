var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('twitter.db');

exports.insertTweet = insertTweet;
function insertTweet(user, text) {
    return new Promise(
        (resolve, reject) => {
            db.run("INSERT into tweet VALUES (?, ?,?,?,?)", [user, text]),
                function (err) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                }

        }
    );
}

exports.newUser = newUser;
function newUser(username, fullname) {
    var currTstamp = new Date();
    return new Promise(
        (resolve, reject) => {
            db.run("INSERT into user VALUES (?,?,?,?)", [userid, username, currTstamp, fullname]),
                function (err, rows) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(rows);
                }
        }
    )
}

exports.showMyTweets = showMyTweets;
function showMyTweets(user) {
    return new Promise(
        (resolve, reject) => {
            db.each(`SELECT tweet_text FROM tweet 
			JOIN user ON tweet.user_name = user.user_name 
			JOIN follow ON follow.user_name = user.user_name 
			WHERE user.user_name = ? and following_name = tweet.user_name ORDER BY DESC`, user),
                function (err, rows) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(rows);
                }
        }
    )
}

exports.verifyUser = verifyUser;
function verifyUser(user) {
    return new Promise(
        (resolve, reject) => {
            db.all("SELECT * from user WHERE user_name = ?", user),
                function (err, rows) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(rows);
                }
        }
    )
}



// insertTweet(db, 'John', 'hello').then(
// 	(val) => {
//       console.log("inserted");
// 	}
// ).catch(
// 	(err) => {
//      console.log("insert failed:", err);
// 	}
// );

exports.deleteTweet = deleteTWeet;
function deleteTweet(user, text) {
    return new Promise(
        (resolve, reject) => {
            var cmd = "DELETE from tweet where col1 = ?";
            db.run(cmd, user),
                function (err) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                }

        }
    );
}

// deleteTweet(db, 'John', 'hello').then(
// 	(val) => {
//       console.log("deleted");
// 	}
// ).catch(
// 	(err) => {
//      console.log("delete failed:", err);
// 	}
// );

//updated function

exports.updateTweet = updateTweet;
function updateTweet(user, text) {
    return new Promise(
        (resolve, reject) => {
            var cmd = "UPDATE tweet SET col2= ? WHERE col1 = ?";
            db.run(cmd, user, text),
                function (err) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                }

        }
    );
}

// updateTweet(db, 'john', 'hello').then(
// 	(val) => {
//       console.log("updated");
// 	}
// ).catch(
// 	(err) => {
//      console.log("update failed:", err);
// 	}
// );




// db.all("SELECT * from tweet",function(err,rows){
// 	 rows.forEach(function (rows) {
//            console.log(rows);
//      })
// });