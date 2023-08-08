const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    title: { type:String, required: true },
    description: {  type:String },
    location : {  type:String , required: true } ,
    price : {  type:Number , required: true } ,
    rooms : {  type:Number , required: true } ,
})
const User = mongoose.model("user", userSchema);
module.exports = User ;