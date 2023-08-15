import mongoose from "mongoose";

//! SET RULE
 const productSchema=new mongoose.Schema({
name:{
    type:String,
    minlength:3,
    maxlength:40,
    required:true,
    trim:true
},
price:{
    type:Number,
    minlength:0,
    required:true
},
brand:{
    type:String,
    minlength:3,
    maxlength:40,
    required:true,
    trim:true
},
color:{
    type:[String],
    required:true,
    trim:true
},
quantity:{
    type:Number,
    minlength:1,
    required:true
},
})

//! CREATE TABLE//Model
export const Product=mongoose.model("Product",productSchema)