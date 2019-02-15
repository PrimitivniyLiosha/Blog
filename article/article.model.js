const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    text : {
        type : String,
        require : true
    },
    title : {
        type : String,
        require : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    }
});

module.exports = mongoose.model("Article", articleSchema);