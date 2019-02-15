const mongoose = require("mongoose");
const Category = require("./category.model");

module.exports.allcategory = async (req, res) => {
    const allcategory = await Category.find({});
    return res.status(200).json(allcategory);
}

module.exports.categoryregister = async (req, res) => {
    const newCategory = await Category.create({
        _id : mongoose.Types.ObjectId(),
        name : req.body.name
    })
    return res.status(200).json(newCategory);
}