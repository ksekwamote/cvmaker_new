const express = require('express')
const fs = require('fs')
const pdf  = require('html-pdf')
const cors = require('cors')
const bodyParser = require('body-parser');	
const app = express();
const ejs = require('ejs');

//WHATSAPP TWILIO

const accountSid = 'ACb2048abb6993308a562518661211f4e2'; 
const authToken = ''; 
const client = require('twilio')(accountSid, authToken);

//CONFIGURE SERVER


const port = process.env.PORT || 5001;
var newpdf='resume.pdf';

app.use(express.json());
app.set('view engine' , 'ejs');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
const htmls = fs.readFileSync('./templates/template1.html', 'utf8')
app.get('/resume',(req, res) => {

	
	res.render('template2' , req.body)

});

//WHATSAPP SENDING API

app.post('/send_whatsapp' , (req, res)=>{

		 console.log(req.body)


	client.messages 
      .create({ 
         body: "Hi, thank you so much for contacting us, we've just recieved your request to create a resume for you. We'll get back to you soon. ",
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+26777105790' 
       }) 
	  .then(message => console.log(message.sid)) 
	  .catch(error => console.log(error +"  "+ "Eish sorry mfwethu" ) )
      .done();


})

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
	res.sendFile(__dirname + '/public/'+newpdf, 'resume.pdf')
	
})
app.get('/My_Resume', (req,res) => {
	res.sendFile(__dirname + '/public/'+newpdf, 'resume.pdf')
	
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
const chooseFile = (filename) =>{

	switch(filename){
		case "template1":
			return './views/template 1.ejs'
		case "template2":
			return './views/template 2.ejs'
		case "template3":
			return './views/template 3.ejs'
		case "template4":
			return './views/template 4.ejs'
		case "template5":
			return './views/template 5.ejs'
		case "template6":
			return './views/template 6.ejs'
		case "template7":
			return './views/template 7.ejs'
		case "template8":
			return './views/template 8.ejs'
		default:
			return './views/template 1.ejs'
	}


}

app.post('/create-resume' , (req, res) => {

	const filename = chooseFile(req.body.templates);

	ejs.renderFile(filename,req.body , function(err, result){

		if (result){

			html =result
		}
		else{
			res.end('An error occured');
			console.log(err);
		}
	})
	const randomNumber =(Math.floor(Math.random() * 10000000000) + 100000000)
	const newFile = 'resume'+ randomNumber.toString()+'.pdf'
	newpdf =newFile
	pdf.create(html).toFile('./public/'+newFile,function(err, res){

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

if(process.env.NODE_ENV === "production"){
	app.use(express.static("build"))
}


app.listen(port , () => console.log(`Listen to port ${port}`))


