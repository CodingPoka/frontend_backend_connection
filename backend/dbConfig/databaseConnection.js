const { default: mongoose } = require("mongoose");
require("dotenv").config();




const connectDb= async()=>{

    try{
      await mongoose.connect(process.env.DB_URL);
      console.log("Database connected successfully");
    }catch(error){
        console.log("Database Connection Failed");
        console.log(error.message);
        process.exit(1);
    }
}

module.exports=connectDb;