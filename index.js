var express = require('express');
var app = express();

app.use('/static', express.static(__dirname+"/public"));
app.get("/", function(req, res){
    res.sendFile(__dirname+"/twittery.html");
});

app.listen(3000, function(){
    console.log('booo-yah!');
});