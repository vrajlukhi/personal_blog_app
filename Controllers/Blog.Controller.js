const BlogModel = require("../Models/Blog.Schema.Js");

const HomeUi = (req, res) => {
    res.render("home");
};

const AddbogUi = (req, res) => {
    res.render("addblog");
};

const AddBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body);
        res.redirect("/blog/home");
    } catch (error) {
        console.error("Error adding blog:", error);
        res.status(500).send("Internal Server Error");
    }
};

const AllBlog = async (req, res) => {
    try {
        const data = await BlogModel.find().sort({ createdAt: -1 });
        res.json(data);
    } catch (error) {
        console.error("Error fetching all blogs:", error);
        res.status(500).send("Internal Server Error");
    }
};

const singleblog = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await BlogModel.findById(id);
        if (!data) {
            return res.status(404).send("Blog not found");
        }
        res.render("singleblog", { data });
    } catch (error) {
        console.error("Error fetching single blog:", error);
        res.status(500).send("Internal Server Error");
    }
};

const deletedata = async (req, res) => {
    try {
        const { id } = req.params;
        await BlogModel.findByIdAndDelete(id);
        res.redirect("/blog/home");
    } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).send("Internal Server Error");
    }
};

const Editdata = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await BlogModel.findById(id);
        if (!data) {
            return res.status(404).send("Blog not found");
        }
        res.render("editblog", { data });
    } catch (error) {
        console.error("Error fetching blog for editing:", error);
        res.status(500).send("Internal Server Error");
    }
};

const updatedata = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await BlogModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!listing) {
            return res.status(404).send("Blog not found");
        }
        res.redirect(`/blog/singleblog/${id}`);
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { HomeUi, AddbogUi, AddBlog, AllBlog, singleblog, deletedata, Editdata, updatedata };
