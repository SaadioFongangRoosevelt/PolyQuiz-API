const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  pseudo:{
    type : String,
    required : true,
    unique : true,
    trim : true,
    lowercase : true},
    bestscore : {
    type : Number,
    default : 0 } 
});
module.exports = mongoose.model('User', userSchema);
