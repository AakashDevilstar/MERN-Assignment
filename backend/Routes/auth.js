const jwt=require("jsonwebtoken");

const authenticateToken=(req,res,next)=>{
    const authheader=req.headers["authorization"];
    const token= authheader && authheader.split(" ")[1];
     
    if(token===null){
        return res.status(403).json({
            message:"Auth token required!!!!"
        });
    }

    jwt.verify(token,"tcmTM",(err,user)=>{
        if(err){
            return res.status(403).json(err);
        }
        req.user=user;
        next();
    });
};

module.exports=authenticateToken;