// app/models/attendance.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AttendanceSchema   = new Schema({
    pId: Number,
    reason: String,
    dates: String,
    confirm: Boolean
});

module.exports = mongoose.model('Attendance', AttendanceSchema);