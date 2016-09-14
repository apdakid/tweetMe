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


// app.post('/insertUser/:name/:password', urlencodedParser, function (req, res) { 
//     dbFile.insertUser(req.params.name, 'testprofile', req.params.password, 'testloginName'); 
//      //    console.log(JSON.parse(JSON.stringify(user))); 
//      //console.log(JSON.stringify(user)); 
 
 
//      res.send({userName: req.params.name});
// })

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
