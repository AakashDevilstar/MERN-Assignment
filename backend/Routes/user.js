const router = require('express').Router();
const User = require("../Models/User");
const bcrypt=require("bcryptjs");
const jwt=require('jsonwebtoken');

router.post("/signup", async (req, res) => {
    try {
        const { username, email } = req.body;
        const existingUser = await User.findOne({ username: username });
        const existEmail = await User.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({
                message: "Username already exists!"
            });
        } else if (username.length < 4) {
            return res.status(400).json({
                message: "Username should have at least 4 characters!"
            });
        }
        if (existEmail) {
            return res.status(400).json({
                message: "Email already exists!"
            });
        }

        const hashpassword=await bcrypt.hash(req.body.password,10);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashpassword,
        });

        await newUser.save();
        return res.status(200).json({
            message: "Sign up successful!"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

router.get("/login",async(req,res)=>{
    try{
        const { username,password} = req.body;
        const existingUser = await User.findOne({ username: username });
        if (!existingUser) {
            return res.status(400).json({
                message: "username or password is incorrect!!"
            });
        } 
        bcrypt.compare(password,existingUser.password,(err,data)=>{
            if(data){
                const authClaims=[{name:username},{jwt:jwt.sign({},"tcmTM")}];
                const token=jwt.sign({authClaims},"tcmTM",{expiresIn:"2d"});
                res.status(200).json({
                    id:existingUser._id,
                    token:token
                });
            }else{
                return res.status(400).json({
                    message:"Invali credentials"
                });
            }
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
})

module.exports = router;
