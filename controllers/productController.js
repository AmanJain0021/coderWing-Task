const mongoose=require('mongoose');
const productModel = require('../models/productModel');


exports.createProduct=async(req,res)=>{
    try {
        const{name,description,price,stock}=req.body;
        if(!name || !description || !price || !stock){
            return res.status(400).json({
                success:false,
                message:"All field are mandatory"
            })
        }

        const product=await productModel.create({name,description,price,stock})

        if(!product){
             return res.status(400).json({
                success:false,
                message:"Failed to add product"
            })
        }
        return res.status(201).json({
            success:true,
            message:"Product created successfully",
            data:product,
        })

     } catch (error) {
         return res.status(500).json({
            success:false,
           error:error.message
        })
    }
}

exports.getProducts=async(req,res)=>{
    try {
        
        const products=await productModel.find({});
        return res.status(200).json({
            success:true,
            message:"Products fetched successfully",
            data:products
        })


    } catch (error) {
         return res.status(500).json({
            success:false,
           error:error.message
        })
    }
}