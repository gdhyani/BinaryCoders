//jshint esversion:6
const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

/* _______________________________________________________________________________________________ */

app.get("/", function(req, res) {
    res.render("home");
});


























app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("Server Started on Port.")
});