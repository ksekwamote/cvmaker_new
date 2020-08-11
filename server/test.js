const express = require('express')
const fs = require('fs')
const pdf  = require('html-pdf')
const cors = require('cors')
const bodyParser = require('body-parser');	
const app = express();
const ejs = require('ejs');


const port = process.env.PORT || 5001;

app.use(express.json());
app.set('view engine' , 'ejs');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
const htmls = fs.readFileSync('./templates/template1.html', 'utf8')
app.get('/resume',(req, res) => {

	
	res.render('template2' , req.body)

});

var html;
app.post('/cv', (req,res) =>{
	
	ejs.renderFile('./views/temp 3.ejs',req.body , function(err, result){

		if (result){

			html =result
		}
		else{
			res.end('An error occured');
			console.log(err);
		}
	})

	
})

app.get('/download', (req,res) => {
	console.log("download")
	res.download(__dirname + '/report.pdf', 'report.pdf')
	
})
app.get('/My_Resume', (req,res) => {
	res.sendFile(__dirname + '/public/resume.pdf', 'resume.pdf')
	
})


app.post('/pdf', (req,res) =>{
	
	pdf.create(htmls).toFile('./resume.pdf',function(err, res){
			if(err){

                return Promise.reject();
            }

            
            return Promise.resolve();

	});
	
})

/*export data into then ejs file*/
app.post('/create-resume' , (req, res) => {

	ejs.renderFile('./views/temp 3.ejs',req.body , function(err, result){

		if (result){

			html =result
		}
		else{
			res.end('An error occured');
			console.log(err);
		}
	})

	pdf.create(html).toFile('./public/resume.pdf',function(err, res){

		if(err) return console.log(err);
			console.log(res);
	});

});
	 
/*Convert EJS file into PDF file*/
app.post('/create-pdf' , (req, res)=>{

	pdf.create(html(req.data)).toFile("./templates/Template.pdf" ,(err, res)=>{

		if(err) return console.log(err);
		console.log(res);
	})
});



app.listen(port , () => console.log(`Listen to port ${port}`))


