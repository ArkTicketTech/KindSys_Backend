var express = require('express'),
    router = express.Router(),
    Teacher = require('../models/teacherModel');

router.route('/')

    .post(function(req, res) {

        var teacher = new Teacher();
        teacher.teacherName = req.body.teacherName;
        teacher.course = req.body.course;
        teacher.phone = req.body.phone;

        teacher.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'teacher created!' });
        });

    })

    .get(function(req, res) {
        Teacher.find(function(err, teachers) {
            if (err)
                res.send(err);
            res.json(teachers);
        });
    });

module.exports = router;