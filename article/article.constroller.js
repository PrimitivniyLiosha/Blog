const mongoose = require("mongoose");
const Article = require("./article.model");

module.exports.article = async (req, res) => {
    const newArticle = await Article.create({
        _id : mongoose.Types.ObjectId(),
        title : req.body.title,
        text : req.body.text,
        category : req.body.category
    })
    return res.status(200).json(newArticle);
}