const router  = require("express").Router();
const Reference = require('../models/reference.model');

router.route('/add').post((req, res) => {
    const rname = req.body.rname;
    const roccupation = req.body.roccupation;
    const remployer = req.body.remployer;
    const remail = req.body.remail;
    const rphone = req.body.rphone;


    const newReference = new Reference({
        rname,
        roccupation,
        remployer,
        remail,
        rphone
    })

    newReference.save()
    .then(() => res.json("Reference  Added"))
    .catch(err => res.status(400).json("Error: "+ err))
})

router.route('/').get((req,res) => {
    Reference.find()
    .then(reference => res.json(reference))
    .catch(err => res.status(400).json('Error: '+ err) )

})

module.exports = router;