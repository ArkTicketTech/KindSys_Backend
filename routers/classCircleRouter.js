var express = require('express'),
    router = express.Router(),
    ClassCircle = require('../models/classCircleModel');

router.route('/')

    .post(function(req, res) {

        var classCircle = new ClassCircle();      // create a new instance of the parent model
        classCircle.name = req.body.name;
        classCircle.members = req.body.members;
        classCircle.courses = req.body.courses;
        // save the grade and check for errors
        console.log(classCircle.name);
        classCircle.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'classCircle created!' });
        });

    })

    .get(function(req, res) {
        console.log(req.query.name);
        var name = req.query.name;
        ClassCircle.find({'name':name},function(err, classCircle) {
            if (err)
                res.send(err);
            res.json(classCircle);
        });
    });

module.exports = router;