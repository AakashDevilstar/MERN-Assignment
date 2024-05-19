const router = require('express').Router();
const User = require("../Models/User");
const Task=require("../Models/Task");
const authenticateToken=require("../Routes/auth");

router.post("/createtask",authenticateToken,async(req,res)=>{
    try{
        const {title,desc}=req.body;
        const {id}=req.headers;
        const newTask=new Task({title:title,desc:desc});
        const saveTask=await newTask.save();
        const taskId=saveTask._id;
        await User.findByIdAndUpdate(id,{$push:{task:taskId._id}}); 
        res.status(200).json({
            message:"Task Completed!!"
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

router.get("/getalltasks",authenticateToken,async(req,res)=>{
    try{
        const {id}=req.headers;
        const userData=await User.findById(id).populate({path:"task" ,options:{sort:{createdAt:-1}},});
        res.status(200).json({
            data:userData
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

router.delete("/deletetask/:id",authenticateToken,async(req,res)=>{
    try{
        const {id}=req.params;
        const userId=req.headers.id;
        await Task.findByIdAndDelete(id);
        await User.findByIdAndUpdate(userId,{$pull:{task:id}});
        res.status(200).json({
            message:"Task Deleted Successfuly!!!"
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});


router.put("/updatetask/:id",authenticateToken,async(req,res)=>{
    try{
        const {id}=req.params;
        const {title,desc}=req.body;
        await Task.findByIdAndUpdate(id,{title:title,desc:desc});
        res.status(200).json({message:"Task Updated Successfully!!!!"})
        res.status(200).json({
            message:"Task Updated Successfuly!!!"
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
})


router.put("/updateimptask/:id",authenticateToken,async(req,res)=>{
    try{
        const {id}=req.params;
        const TaskData=await Task.findById(id);
        const ImpTask=TaskData.important;
        await Task.findByIdAndUpdate(id,{important:!ImpTask});
        res.status(200).json({message:"Task Updated Successfully!!!!"})
        res.status(200).json({
            message:"Task Updated Successfuly!!!"
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
})


router.put("/updatecomptask/:id",authenticateToken,async(req,res)=>{
    try{
        const {id}=req.params;
        const TaskData=await Task.findById(id);
        const CompTask=TaskData.completed;
        await Task.findByIdAndUpdate(id,{completed:!CompTask});
        res.status(200).json({message:"Task Updated Successfully!!!!"})
        res.status(200).json({
            message:"Task updated Successfuly!!!"
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});


router.get("/getimptasks",authenticateToken,async(req,res)=>{
    try{
        const {id}=req.headers;
        const Data=await User.findById(id).populate({path:"task",match:{important:true},options:{sort:{createdAt:-1}},});
        const ImpTasks=Data.task;
        res.status(200).json({
            data:ImpTasks
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});


router.get("/getcomptasks",authenticateToken,async(req,res)=>{
    try{
        const {id}=req.headers;
        const Data=await User.findById(id).populate({path:"task",match:{completed:true},options:{sort:{createdAt:-1}},});
        const CmpTasks=Data.task;
        res.status(200).json({
            data:CmpTasks
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});


router.get("/getincomptasks",authenticateToken,async(req,res)=>{
    try{
        const {id}=req.headers;
        const Data=await User.findById(id).populate({path:"task",match:{completed:false},options:{sort:{createdAt:-1}},});
        const CmpTasks=Data.task;
        res.status(200).json({
            data:CmpTasks
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});


module.exports=router;