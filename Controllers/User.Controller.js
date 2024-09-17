const UserModel = require("../Models/User.Schema")
const jwt=require("jsonwebtoken")

const SignupUi=(req,res)=>{
    res.render("signup")
}
const LoginUi=(req,res)=>{
    res.render("login")
}
const Signup=async(req,res)=>{
    let{email}=req.body
    let userdata=await UserModel.findOne({email:email})
    if(!userdata){
        let newuser=await UserModel.create(req.body)
        res.redirect("/user/login") 
    }
    else{
        res.redirect("/user/login")
    }
}
const Login=async(req,res)=>{
    let{email,password}=req.body
    let userdata=await UserModel.findOne({email:email})
    if(userdata){
        if(userdata.password==password){
            let token=jwt.sign({id:userdata._id},'pass')
            res.status(200).cookie("token",token)
            res.redirect("/blog/home")
        }
        else{
            res.json("Password is wrong")
        }
    }
    else{
        res.redirect("/user/signup")
    }
}

module.exports={SignupUi,LoginUi,Signup,Login}