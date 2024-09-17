const {Router}=require("express")
const { HomeUi, AddbogUi, AddBlog, AllBlog, singleblog, deletedata, Editdata, updatedata } = require("../Controllers/Blog.Controller")
const { Auth } = require("../Middleware/Auth")
const BRoute=Router()

BRoute.get("/home",Auth,HomeUi)
BRoute.get("/addblog",Auth,AddbogUi)
BRoute.post("/addblog",Auth,AddBlog)
BRoute.get("/allblog",AllBlog)
BRoute.get("/singleblog/:id",singleblog)
BRoute.delete("/:id",deletedata)
BRoute.get("/:id/edit",Editdata)
BRoute.patch("/:id",updatedata)
module.exports=BRoute