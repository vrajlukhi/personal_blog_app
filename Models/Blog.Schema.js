
const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    img:{
        type:String,
        require:true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const BlogModel = mongoose.model("Blog", BlogSchema);

module.exports = BlogModel;