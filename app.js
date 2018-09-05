const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.set('views', [path.join(__dirname, 'views'),
                      path.join(__dirname, 'views/admin/')]);

app.get("/", (req, res) => res.render("home"));

app.get("/about", (req, res) => res.render("about"));

app.get("/delicacies", (req, res) => res.render("delicacies"));

app.get("/login", (req, res) => res.render("login"));

app.get("/signup", (req, res) => res.render("signup"));

app.get("/orders", (req, res) => res.render("orders"));

app.get("/changepassword", (req, res) => res.render("changepassword"));

app.get("/addproduct", (req, res) => res.render("addproduct"));

app.get("/products", (req, res) => res.render("products"));

app.listen(3000, () => console.log("server is listening..."));

