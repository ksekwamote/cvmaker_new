const express = require('express')
const fs = require('fs')
const pdf  = require('html-pdf')
	
const app = express();
const ejs = require('ejs');

const port = process.env.PORT || 5001;

app.use(express.json());
app.set('view engine' , 'ejs');
const htmls = fs.readFileSync('./templates/template1.html', 'utf8')
app.get('/resume',(req, res) => {

	
	res.render('template2' , req.body)

});

var html;
app.post('/cv', (req,res) =>{
	
	ejs.renderFile('./views/template2.ejs',req.body , function(err, result){

		if (result){

			html =result
		}
		else{
			res.end('An error occured');
			console.log(err);
		}
	})

	
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
	ejs.renderFile('./views/template2.ejs',req.body , function(err, result){

		if (result){

			html =result
		}
		else{
			res.end('An error occured');
			console.log(err);
		}
	})

	pdf.create(html).toFile('./resume.pdf',function(err, res){

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


