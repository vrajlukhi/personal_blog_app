const {Router}=require("express")
const { SignupUi, LoginUi, Signup, Login } = require("../Controllers/User.Controller")
const URoute=Router()

URoute.get("/signup",SignupUi)
URoute.post("/signup",Signup)
URoute.get("/login",LoginUi)
URoute.post("/login",Login)

module.exports=URoute