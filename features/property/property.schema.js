const mongoose = require("mongoose");

const propertySchema= new mongoose.Schema({
    seller : { type: mongoose.Schema.Types.ObjectId , ref: "user" , required :true  },
    title: { type:String, required: true },
    description: {  type:String },
    location : {  type:String , required: true } ,
    price : {  type:Number , required: true } ,
    rooms : {  type:Number , required: true } ,
})
const Property = mongoose.model("property", propertySchema);
module.exports = Property ;