var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var Activity = new Schema({
    activity_id:String,
    agency_id: String,
    title:String,
    target_age:String,
    contacter:String,
    contact_method:String,
    contact_number:Number,
    address:String,
    contact_email:String,
    attachments:[{type:String,url:String}], // type = photos , logo, zhaosheng jianzhang 
    activity_time:{start:Date,end:Date},
    category:String,
    description:String,
    refund_rule:String,
    refund_time:Date,
    refund_des:String
})

module.exports=mongoose.model('Activity',Activity,'Activities');


/* courses

{
    company_id:"SH1001",
    company_name:"国航上海分公司",
    departments:[{name:"飞行部"},{name:"信管部"}],
    address:"xxxxx",
    },



endof courses
*/