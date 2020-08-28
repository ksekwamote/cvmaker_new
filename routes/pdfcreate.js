const fs = require('fs')
const pdf = require('html-pdf');
const ejs = require('ejs');
let path = require("path");

const router = require('express').Router();
var html;

router.route('/create').post((req,res) => {
    ejs.renderFile(path.join('./views/', "template2.ejs"),req.body , (err, data) => {

		if (err){

			res.send("Erro1: "+err);
		}
		else{

			let options = {
				"height": "11.25in",
				"width": "8.5in",
				"header": {
					"height": "20mm"
				},
				"footer": {
					"height": "20mm",
				},
			};
			pdf.create(data, options).toFile("report.pdf", function (err, data) {
				if (err) {
					res.send("Error2: "+err);
				} else {
					res.send("File created successfully");
				}
			});


			
		}
	})

});


router.route('/download').get((req,res)=>{

	res.sendFile('C:\\Users\\Mandla\\Documents\\REACT\\cvmaker\\server\\report.pdf')

})

module.exports = router;