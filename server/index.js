var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello Everybody");
});

app.listen(5000);