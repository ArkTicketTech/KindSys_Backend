// app/models/grade.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GradeSchema   = new Schema({
    name: String,
    tId: Number
});

module.exports = mongoose.model('Grade', GradeSchema);