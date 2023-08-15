
import express from "express";
import { addNewProduct } from "./product.service.js";
import { getAllProducts } from "./product.service.js";
import { deleteProduct } from "./product.service.js";
import { getOneProduct } from "./product.service.js";
import { editProduct } from "./product.service.js";
const router = express.Router();

//! add product
router.post("/product/add",addNewProduct);

//! get all product
router.get("/products",getAllProducts);

//! delete product
router.delete("/product/delete/:id",deleteProduct)

//! get one
router.get("/product/info/:id",getOneProduct)

//! edit
router.put("/product/edit/:id",editProduct)

export default router;