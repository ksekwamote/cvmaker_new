const router = require('express').Router();
const Personal = require('../models/personal.model');

router.route('/add').post((req,res) => {

    const firstname = req.body.firstname;
    const surname = req.body.surname;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const dob = req.body.dob;
    const address = req.body.address;

    const newPersonal = new Personal({
        firstname,
        surname,
        email,
        phoneNumber,
        dob,
        address
    });

    newPersonal.save()
    .then(() => res.json(" Personal Added"))
    .catch(err => res.status(400).json("Error: "+ err))

})


router.route('/').get((req,res) => {
    Personal.find()
    .then(personal => res.json(personal))
    .catch(err => res.status(400).json('Error: '+ err) )

})

module.exports = router;