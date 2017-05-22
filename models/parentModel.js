// app/models/parent.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ParentSchema   = new Schema({
    studentName: String,
    phone: String,
    points: Number,
    classId: String,
    gender: Number
});

module.exports = mongoose.model('Parent', ParentSchema);