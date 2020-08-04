const express  = require('express');
const cors  = require('cors');
const mongoose = require('mongoose');
const pdf = require('html-pdf');
const fs = require('fs')
const bodyParser = require('body-parser');
const ejs = require('ejs');



const pdfTemplate = require('./templates/template2.js')



const app = express();

const port = process.env.PORT || 5000;

app.set('view engine','ejs')
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.json());

const url = 'mongodb://127.0.0.1:27017/resume'
mongoose.connect(url, { useNewUrlParser: true ,useCreateIndex: true }) 
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})


console.log("Hello World");

const educationRouter  = require('./routes/education');
const experienceRouter = require('./routes/experience')
const interestRouter = require('./routes/interest')
const objectiveRouter = require('./routes/objective')
const personalRouter = require('./routes/personal')

const qualitiesRouter = require('./routes/qualities')


const referenceRouter = require('./routes/reference')
const pdfcreateRouter = require('./routes/pdfcreate')

app.use('/education' , educationRouter)



app.use('/experience' , experienceRouter)
app.use('/interest' , interestRouter)
app.use('/pdfcreate' , pdfcreateRouter)


app.use('/objective', objectiveRouter)

app.use('/personal', personalRouter)


app.use('/qualities' , qualitiesRouter)
app.use('/reference',referenceRouter)
app.get('/download',function(req,res){

	res.download('C:\\Users\\Mandla\\Documents\\REACT\\cvmaker\\server\\report.pdf', 'report.pdf')
})


app.listen(port , () => console.log(`Listening on port ${port}`))