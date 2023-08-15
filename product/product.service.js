import { schema } from "./schema.joi.js";
import { Product } from "./product.schema.js";
import { checkMongoIdValidity } from "../utils/mongoId.Valid.js";


//! add product
export const addNewProduct= async (req, res) => {
    const newProduct = req.body;
    try {
      await schema.validateAsync(newProduct);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
    await Product.create(newProduct);
    return res.status(200).send({ message: "Product is added successfully." });
  }
//! get all product
export const getAllProducts=async (req, res) => {
    const allProducts = await Product.find();
  
    return res.status(200).send(allProducts);
  }

//! delete product
  export const deleteProduct=async(req,res)=>{
    //extract id from params
    const productId=req.params.id
    //check mongoose validity-->//! Done
    // check mongoose id validity
    const isValid = checkMongoIdValidity(productId);
  
    // if not valid, throw error
    if (!isValid) {
      return res.status(400).send({ message: "Invalid mongo id." });
    }
    
    //check if prod exist
    const product=await Product.findOne({_id:productId})
    //if no prod throw error
    if(!product){
      return res.status(400).send({ message:"not found" });
    }
    //if exist delete
    await Product.deleteOne(product)
      // send appropriate response
      return res.status(200).send({ message: "Product is deleted successfully." });
  }

//! get one
  export const getOneProduct=async(req,res)=>{
    //extract id from params
    const productId=req.params.id
    //check mongoose validity-->//! Done
    const isValid = checkMongoIdValidity(productId);
  
    // if not valid, throw error
    if (!isValid) {
      return res.status(400).send({ message: "Invalid mongo id." });}
  
    //check if prod exist
    const product=await Product.findOne({_id:productId})
    //if no prod throw error
    if(!product){
      return res.status(400).send({ message:"Product not found" });
    }
  
   
    const newProductList=await Product.findOne(product)
    
  
  // send appropriate response
  return res.status(200).send(newProductList);
  }

//!edit 
export const editProduct=async(req,res)=>{
    //extract id from params
    const productId=req.params.id
    //check mongoose validity-->//! Done
    const isValid = checkMongoIdValidity(productId);
  
    // if not valid, throw error
    if (!isValid) {
      return res.status(400).send({ message: "Invalid mongo id." });}
  
    //check if prod exist
    const product=await Product.findOne({_id:productId})
    //if no prod throw error
    if(!product){
      return res.status(400).send({ message:"Product not found" });
    }
  
    const newProductList=await Product.findOne(product)
  // send appropriate response
  return res.status(200).send({message:"Product has been edited"});
  }
