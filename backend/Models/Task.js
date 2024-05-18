const mongoose=require('mongoose');
const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
        unique:true,
    },
    important:{
        type:boolean,
        default:false,
    },
    completed:{
        type:boolean,
        default:false,
    },
    incompleted:{
        type:boolean,
        default:false,
    },
},{timestamps:true});

module.exports=mongoose.model("Task",TaskSchema);