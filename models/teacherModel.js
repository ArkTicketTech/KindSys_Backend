// app/models/teacher.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TeacherSchema = new Schema({
    teacherName: String,
    course: String,
    phone: String
});

module.exports = mongoose.model('Teacher', TeacherSchema);
