const express=require('express');
const {addToCart}=require('../controllers/cartController')
const router=express.Router();

router.post('/addtocart',addToCart);


module.exports=router;
