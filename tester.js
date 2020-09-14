const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');	
const app = express();
const port = process.env.PORT || 5002;

app.get('/', function(req, res){ 
    res.download('Hello.txt'); 
}); 

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());