import express from "express";
import { userSignup , userLogin } from "../Controller/UserController.js";
import { getProducts , getProductById } from "../Controller/ProductController.js";
// Create a router instance
const router = express.Router();


router.post('/signup', userSignup);
router.post('/login', userLogin);

//api edukan get upajokikunu.using redux
router.get('/products', getProducts);
router.get('/product/:id', getProductById);

export default router;