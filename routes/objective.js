const router  = require('express').Router();
const Objective = require('../models/objective.model');

router.route('/add').post((req,res) => {
    
    const obj  = req.body.obj;
  

    const newObjective = new Objective({
        obj
        
    });

    newObjective.save()
    .then(() => res.json("Objective added "))
    .catch(err => res.status(400).json('Error: '+ err));
})


router.route('/').get((req,res) => {
    Objective.find()
    .then(objective => res.json(objective))
    .catch(err => res.status(400).json('Error: '+ err))

})
module.exports = router;