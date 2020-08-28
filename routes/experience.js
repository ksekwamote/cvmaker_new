const router = require('express').Router();
const Experience = require('../models/experience.model');

router.route('/add').post((req,res) => {

    const employer = req.body.employer;
    const jobTitle = req.body.jobTitle;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;  
    const jobObjective = req.body.jobObjective;


    const newExperience = new Experience({

        employer,
        jobTitle,
        startDate,
        endDate,
        jobObjective
        
    });


    newExperience.save()
        .then(() => res.json('Experience Added'))
        .catch(err => res.status(400).json('Error: '+ err));

})


router.route('/').get((req,res) => {
    Experience.find()
        .then(experience => res.json(experience))
        .catch(err => res.status(400).json('Error: '+ err) )

})

module.exports = router;