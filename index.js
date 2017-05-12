// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/kindsys'); // connect to our database

// Models
var Parent     = require('./models/parent');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8888;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// on routes that end in /parents
// ----------------------------------------------------
router.route('/parents')

    // create a parent (accessed at POST http://localhost:8080/api/parents)
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

    // get all the parents (accessed at GET http://localhost:8080/api/parents)
    .get(function(req, res) {
        Parent.find(function(err, parents) {
            if (err)
                res.send(err);

            res.json(parents);
        });
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);