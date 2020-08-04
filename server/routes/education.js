const router = require('express').Router();
const Education = require('../models/education.model');

router.route('/add').post((req,res) => {

    const fieldOfStudy = req.body.fieldOfStudy;
    const schoolName = req.body.schoolName;
    const startDate = req.body.startDate;
    const gradDate = req.body.gradDate
   

    const newEducation = new Education({

        fieldOfStudy,
        schoolName,
        startDate,
        gradDate
        
    });


    newEducation.save()
        .then(() => res.json('Education Added'))
        .catch(err => res.status(400).json('Error: '+ err));

})

router.route('/').get((req,res) => {
    Education.find()
    .then(education => res.json(education))
    .catch(err => res.status(400).json('Error: '+ err) )

})

module.exports = router;
