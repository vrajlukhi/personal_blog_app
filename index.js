const express=require("express");
const connect = require("./Config/db");
const cookie=require("cookie-parser");
const URoute = require("./Routes/User.Route");
const BRoute = require("./Routes/Blog.Route");
const methodOverride=require("method-override")
const ejsMate=require("ejs-mate")
require("dotenv").config()
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine","ejs")
app.set("views",(__dirname+"/views"))
app.use(cookie())
app.use(methodOverride("_method"))
app.engine("ejs",ejsMate)

app.get("/",(req,res)=>{
    res.redirect("/user/signup")
})
app.get("/user",(req,res)=>{
    res.redirect("/user/signup")
})
app.get("/blog",(req,res)=>{
    res.redirect("/blog/home")
})
app.use("/user",URoute)
app.use("/blog",BRoute)

app.listen(process.env.PORT,()=>{
    console.log(`server connected ${process.env.PORT}`);
    connect()
})