



const app=require("./app");
const connectDb = require("./dbConfig/databaseConnection");

require("dotenv").config();
const port=process.env.PORT;


app.get("/",(req,res)=>{
    res.send("API is running successfully");
});

app.listen(port, async ()=>{
    console.log(`Server is running successfully at http://localhost:${port}`);
    await connectDb();
})
