var express = require('express'),
    router = express.Router(),
    Parent = require('../models/parentModel');

router.route('/')

    .post(function(req, res) {

        var parent = new Parent();      // create a new instance of the parent model
        parent.studentName = req.body.studentName;
        parent.phone = req.body.phone;
        parent.points = req.body.points;
        parent.classId = req.body.classId;
        parent.gender = req.body.gender;
        // save the parent and check for errors
        parent.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'parent created!' });
        });

    })

    .get(function(req, res) {
        Parent.find(function(err, parents) {
            if (err)
                res.send(err);

            res.json(parents);
        });
    });

module.exports = router;