var express  = require('express');
var fs = require('fs')
var app = express();

const port = process.env.PORT || 4000;

var pdf  = require('html-pdf')
var html = fs.readFileSync('./templates/template1.html' , 'utf8');
var options  = {format: 'Letter'}

pdf.create(html, options).toFile('./template.pdf', function(err, res){
    if(err) return console.log(err);
    console.log(err)

});

app.listen(port , () => console.log(`Listening on port ${port}`))