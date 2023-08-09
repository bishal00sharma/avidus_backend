const mongoose = require("mongoose");

const propertySchema= new mongoose.Schema({
    seller : { type: mongoose.Schema.Types.ObjectId , ref: "user" , required :true  },
    title: { type:String, required: true },
    description: {  type:String },
    location : {  type:String , required: true } ,
    price : {  type:Number , required: true } ,
    img : {  type:String , default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStPjEmGXOXvN5SBFfcET4KscA0V1OiS2zHHLHvV4l&s" } ,
    bookingDate:{ type : Array , "default" : [] }
})
const Property = mongoose.model("property", propertySchema);
module.exports = Property ;