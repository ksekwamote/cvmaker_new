const router  = require('express').Router();
const Interest = require('../models/interest.model');

router.route('/add').post((req, res) =>{
    const interest = req.body.interest;

    const newInterest = new Interest({
        interest
    
    });

    newInterest.save()
        .then(()=> res.json('Interest Added'))
        .catch(err => res.status(400).json('Error: ' + err));


});

router.route('/').get((req,res) => {
    Interest.find()
    .then(interest => res.json(interest))
    .catch(err => res.status(400).json('Error: '+ err) )

})

module.exports = router;