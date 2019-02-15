const express = require("express");
const router = express.Router();
const categoryController = require("./category.controller");

router.get("/allcategory", categoryController.allcategory);
router.post("/category", categoryController.categoryregister);

module.exports = router;