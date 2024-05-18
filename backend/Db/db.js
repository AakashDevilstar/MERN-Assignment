const mongoose=require('mongoose');
const connection=async()=>{
    try{
        const res=await mongoose.connect(`${process.env.MONGO_URL}`);
        if(res){
            console.log("Connected to db!!!!");
        }
    }
    catch(error){
        console.log(error);
    }
};
connection();