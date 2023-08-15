import express  from "express";
import { dbConnect } from "./dbConnection.js";
import router from "./product/product.Routes.js";

const port=7000

const app=express()//? Experss call
app.use(express.json())//? TO MAKE APP UNDERSTAND JSON
app.use(router)//? TO MAKE APP use routes


dbConnect()//?DB CONNECTION

app.listen(port,(
console.log(`app listening on ${port}`)
))