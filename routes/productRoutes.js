const express=require('express');
const { createProduct,getProducts } = require('../controllers/productController');
const router=express.Router();

router.post('/create',createProduct);
router.get('/get',getProducts);

module.exports=router