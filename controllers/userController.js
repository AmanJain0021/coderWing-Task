const mongoose=require('mongoose');
const userModel = require('../models/userModel');
const bcrypt=require('bcrypt');

exports.Register=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
            const hashedPassword = await bcrypt.hash(password, 0);

            const user=await userModel.create({name,email,password:hashedPassword});
            console.log(name,email,hashedPassword);
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Enter valid credentials",
                data:user
            })
        }
        return res.status(201).json({
            success:true,
            message:"User created successfully",
        })

        
    } catch (error) {
         return res.status(500).json({
            success:false,
           error:error.message
        })
    }
}


exports.Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await userModel.findOne({email});

        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found"
               
            })
        }
        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Enter a valid password"
            })
        }
        return res.status(200).json({
            success:true,
            message:"User login successfully",
            data:user
        })

       
     } catch (error) {
         return res.status(500).json({
            success:false,
           error:error.message
        })
    }
}