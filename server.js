const express = require("express");
const cors = require("cors");
const userRoutes=require('./routes/userRoutes');
const connectDB = require("./config/db");
const productRoutes=require('./routes/productRoutes')
const cartRoutes=require('./routes/cartRoutes');



const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use('/api/user',userRoutes)
app.use('/api/products',productRoutes)
app.use('/api/cart',cartRoutes)

app.listen(5000,()=>{
    console.log("Server running on port 5000");
    
})
