var express = require('express'),
    router = express.Router(),
    Grade = require('../models/gradeModel');

router.route('/')

    .post(function(req, res) {

        var grade = new Grade();      // create a new instance of the parent model
        grade.name = req.body.name;
        grade.tId = req.body.tId;
        // save the grade and check for errors
        grade.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'grade created!' });
        });

    })

    .get(function(req, res) {
        Grade.find(function(err, grades) {
            if (err)
                res.send(err);

            res.json(grades);
        });
    });

module.exports = router;