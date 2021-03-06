const express = require('express')
const fs = require('fs')
const pdf  = require('html-pdf')
const cors = require('cors')
const bodyParser = require('body-parser');	
const app = express();
const ejs = require('ejs');
const path = require("path")
const compression = require('compression');
const debugMiddleware = require('debug-middleware');
const http = require('http');
const https = require('https');

//CONFIGURE SERVER


const port = process.env.PORT || 5001;


//SITEMAP



//Increase Max Sockets
http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;


var newpdf='resume.pdf';

app.use(compression());
app.use(express.json());
app.set('view engine' , 'ejs');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
const htmls = fs.readFileSync('./templates/template1.html', 'utf8')
app.get('/resume',(req, res) => {

	
	res.render('template2' , req.body)

});

//MINIFY WITH UGLIFY
module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
    	}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};

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

app.get('/api/download', (req,res) => {
	res.download(__dirname + '/public/'+newpdf, 'resume.pdf')
	
})

/**
app.get('/resumake', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
*/

app.get('/api/test' , (req,res)=>{

	res.download("public/resume162041848.pdf")
})

app.get('/api/download_resume', (req,res) => {
	res.download(__dirname + '/public/'+newpdf, 'resume.pdf')
	
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

app.post('/api/create-resume' , (req, res) => {


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
	pdf.create(html,{orientation:'potrait',type:'pdf',timeout:'1000000'}).toFile('./public/'+newFile,function(err, res){

		if(err) return console.log(err);
			console.log(res);
	});

});
	 
/*Convert EJS file into PDF file*/
app.post('/api/create-pdf' , (req, res)=>{

	pdf.create(html(req.data)).toFile("./templates/Template.pdf" ,(err, res)=>{

		if(err) return console.log(err);
		console.log(res);
	})
});

	app.use(express.static(__dirname+"/client/build" ,{maxAge: 31557600}));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});



	


app.listen(port , () => console.log(`Listen to port ${port}`))
