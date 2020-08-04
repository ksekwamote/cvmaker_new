const router  = require("express").Router();
const Qualities = require('../models/qualities.model');


router.route('/add').post((req, res)=>{
    const qualities = req.body.qualities;

    const newQualities = new Qualities({qualities})

    newQualities.save()
    .then(() => res.json("Qualities  Added"))
   .catch(err => res.status(400).json("Error: "+ err))
})


router.route('/').get((req,res) => {
    Qualities.find()
    .then(qualities => res.json(qualities))
    .catch(err => res.status(400).json('Error: '+ err))

})

module.exports = router;