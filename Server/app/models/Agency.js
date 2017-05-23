var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var Agency = new Schema({
    agency_id: String,
    agency_name:String,
    description:String,
    creation_date:{type:Date,default:Date.now},
    basic_info:[Schema.Types.Mixed],
    contact_person:String,
    contact_number:Number
})

module.exports=mongoose.model('Agency',Agency,'Agencys');


/* courses

{
    company_id:"SH1001",
    company_name:"国航上海分公司",
    departments:[{name:"飞行部"},{name:"信管部"}],
    address:"xxxxx",
    },



endof courses
*/