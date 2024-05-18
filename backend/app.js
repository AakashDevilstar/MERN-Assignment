const express=require('express');
const app=express();
require("dotenv").config();
require("./Db/db");
const cors=require("cors");
const UserAPI=require("./Routes/user");
app.use(cors());
app.use(express.json());

app.use("/api/v1",UserAPI);

app.use("/",(req,res)=>{
    res.send("Hello from Backend side");
});

const PORT=1000;

app.listen(PORT,()=>{
    console.log("server started");
});