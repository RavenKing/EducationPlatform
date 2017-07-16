var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
     	user_name:String,
      password:String,
    address:String,
    phone:Number,
    create_time:{type:Date,default:Date.now}
})


module.exports = mongoose.model('User', User,'Users');
