var express = require('express'),
    router = express.Router(),
    parent = require('./parentRouter'),
    teacher = require('./teacherRouter');
    attendance = require('./attendanceRouter')
    grade = require('./gradeRouter')
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.use('/parents', parent);
router.use('/teachers', teacher);
router.use('/attendance', attendance);
router.use('/grade',grade);
module.exports = router;