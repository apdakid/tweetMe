var dbFile = require('./db');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

app.use('/static', express.static(__dirname+"/public"));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/public/twittery.html");
});

// app.get('/userId/:name', urlencodedParser, function (req, res) { 
//     dbFile.getUserId(req.params.name, function (err, result) { 
//         if (err) { 
//         console.log(err); 
//         } else { 
//         console.log("TheUserId: " + result); 
//         res.send({ userId: result }); 
//     } 
 
 
//      }); 
// }) 

//example of using promises to wait for req to be completed
// app.post('/newUser/:username/:fullname', urlencodedParser, function (req, res) { 
//     dbFile.newUser(req.params.username, req.params.fullname).then(
//         (val) => {
//             return dbFile.getUser(req.params.username);
//         }
//     ).then(
//         (val) => {
//             res.send(val);
//         }
//     ).catch(
//          (err) => {
//             res.status(400);
//             res.send('User already exist.');
//         }
//     );
//      //    console.log(JSON.parse(JSON.stringify(user))); 
//      //console.log(JSON.stringify(user)); 
 
 
//      res.send({userName: req.params.name});
// })

app.post('/newUser/:username/:fullname', urlencodedParser, function (req, res) { 
    dbFile.newUser(req.params.username, req.params.fullname).then(
        (val) => {
          res.send(val);
        }
    ).catch(
         (err) => {
            res.status(400);
            res.send('User already exist.');
        }
    );
  });

  app.post('/newTweet/:username/:msg', urlencodedParser, function (req, res) { 
    dbFile.insertTweet(req.params.username, req.params.msg).then(
        (val) => {
          res.send(val);
        }
    ).catch(
         (err) => {
            res.status(400);
            res.send('error with something.');
        }
    );
  });

app.get('/timeline/:username', urlencodedParser, function (req, res){
    dbFile.showMyTweets(req.params.username).then(
        (tweets) => {
            res.send(tweets);
        }     
    ).catch(
        (err) => {
            res.status(400);
            res.send('User name does not exist.');
        }
    );

});

// app.listen(3000, function(){
//     console.log('booo-yah!');
// });

  
 var server = app.listen(8081, function () { 
     var host = server.address().address; 
     var port = server.address().port; 
 
 
     console.log("Example app listening at http://%s:%s", host, port); 
 
 
 }); 
