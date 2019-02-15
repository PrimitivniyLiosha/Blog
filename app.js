const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const articleRouter = require("./article/article.router");
const categoryRouter = require("./category/category.router");


mongoose.connect(
    'mongodb://localhost:27017/blog',
    { useNewUrlParser: true },
    () => {
        console.log('connect to database...')
    }
);

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use("/articles", articleRouter);
app.use("/categories", categoryRouter);

module.exports = app;