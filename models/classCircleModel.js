// app/models/grade.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ClassCircleSchema   = new Schema({
    name: String,
    members: Array,
    courses: Array
});

module.exports = mongoose.model('ClassCircle', ClassCircleSchema);