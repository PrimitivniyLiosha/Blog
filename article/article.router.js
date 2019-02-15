const express = require("express");
const router = express.Router();
const articleControler = require("./article.constroller");

router.post("/article", articleControler.article);

module.exports = router;