const BlogModel = require("../Models/Blog.Schema.Js")

const HomeUi = (req, res) => {
    res.render("home")
}
const AddbogUi = (req, res) => {
    res.render("addblog")
}
const AddBlog = async (req, res) => {
    let data = await BlogModel.create(req.body)
    res.redirect("/blog/home")
}
const AllBlog = async (req, res) => {
    let data = await BlogModel.find().sort({ createdAt: -1 })
    res.json(data)
}
const singleblog = async (req, res) => {
    let { id } = req.params
    let data = await BlogModel.findById(id)
    res.render("singleblog", { data })

}
const deletedata = async (req, res) => {
    let { id } = req.params
    await BlogModel.findByIdAndDelete(id)
    res.redirect("/blog/home")
}
const Editdata = async (req, res) => {
    let { id } = req.params
    const data = await BlogModel.findById(id)
    res.render("editblog", { data })
}
const updatedata = async (req, res) => {
    let { id } = req.params;
    let listing = await BlogModel.findByIdAndUpdate(id, req.body);

    res.redirect(`/blog/singleblog/${id}`);
};

module.exports = { HomeUi, AddbogUi, AddBlog, AllBlog, singleblog, deletedata, Editdata, updatedata }