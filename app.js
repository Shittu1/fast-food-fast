const express = require("express");
const path = require("path");
const ejsLint = require('ejs-lint');

const app = express();

//Public Folder
app.use(express.static("public"));
// app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, 'public')));

//View engine
app.set("view engine", "ejs");

app.set('views', [path.join(__dirname, 'views'),
                  path.join(__dirname, 'views/admin/')]);


//delicacies routes
app.use(require("./routes/delicacies"));

app.get("/", (req, res) => res.render("home"));

app.get("/about", (req, res) => res.render("about"));

app.get("/contact", (req, res) => res.render("contact"));

app.get("/login", (req, res) => res.render("login"));

app.get("/signup", (req, res) => res.render("signup"));

app.get("/orders", (req, res) => res.render("orders"));

app.get("/changepassword", (req, res) => res.render("changepassword"));

app.get("/addproduct", (req, res) => res.render("addproduct"));



//404 catch-all handler (middleware)
app.use((req, res) => {
	res.status(404);
	res.render('404');
});

//500 error handler (middleware)
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});



app.listen(3000, () => console.log("server is listening..."));

