const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// const multer = require("multer");
// const upload = multer({dest: 'uploads/'})

//Set Storage Engine
// const storage = multer.diskStorage({
// 	destination: "uploads/",
// 	filename: function(req, file, cb){
// 		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
// 	}
// });

//Init Upload
// const upload = multer({
// 	storage: storage,
// 	limits:{fileSize: 1000000},
// 	filefilter: function(req, file, cb){
// 		checkFileTyype(file, cb);
// 	}
// }).single('productImage');

//Check File Type
// function checkFileType(file, cb){
// 	//Allowed ext
// 	const filetypes = /jpeg|jpg|png|gif/;
// 	//Check ext
// 	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     //Check mime
//     const mimetype = filetypes.test(file.mimetype);	

//     if(mimetype && extname){
//     	return cb(null, true);
//     } else {
//     	cb('Error: Images Only!');
//     }
// }


var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Public Folder
app.use(express.static("public"));


app.set("view engine", "ejs");

app.set('views', [path.join(__dirname, 'views'),
                  path.join(__dirname, 'views/admin/')]);


let delicacies = [
		{name:"Burger Cheese", image:"/images/burger-cheese1.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Coconut Candy", image:"/images/coconut-candy.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Fried Meat", image:"/images/fried-meat.jpeg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Hamburger Bacon", image:"/images/hamburger-bacon.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Sausage Roll", image:"/images/pexels1.jpeg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Coconut Bread", image:"/images/pexels2.jpeg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Fried Pizza", image:"/images/pizza.jpeg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Boli", image:"/images/boli.jpg", alt:"Roasted Plantain Image", price:"$10", date:""},
		{name:"Puff Puff", image:"/images/puff-puff.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Asun", image:"/images/asun.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Cake", image:"/images/cake.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Doughnuts", image:"/images/doughnuts.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"French Fries", image:"/images/french-fries.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Gizdodo", image:"/images/gizdodo.jpeg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Grilled Plaintain", image:"/images/grilled-plantain.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Sandwich", image:"/images/sandwich.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Shawarma", image:"/images/shawarma.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Suya", image:"/images/suya.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Pepperoni", image:"/images/zestypepperoni.png", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Chin Chin", image:"/images/chin-chin.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"CatFish Pepper Soup", image:"/images/catfish-peppersoup.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Chicken Nugget", image:"/images/chicken-nugget.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"CreamySandwich", image:"/images/creamy-sandwich.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Kokoro", image:"/images/kokoro.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Meat Pie", image:"/images/meat-pie.jpg", alt:"Burger Cheese Image", price:"$10", date:""},
		{name:"Plantain Chips", image:"/images/plantain-chips.jpg", alt:"Burger Cheese Image", price:"$10", date:""}	
	]



app.get("/", (req, res) => res.render("home"));

app.get("/about", (req, res) => res.render("about"));

app.get("/login", (req, res) => res.render("login"));

app.get("/signup", (req, res) => res.render("signup"));

app.get("/orders", (req, res) => res.render("orders"));

app.get("/changepassword", (req, res) => res.render("changepassword"));

app.get("/addproduct", (req, res) => res.render("addproduct"));

app.get("/products", (req, res) => res.render("products", {delicacies: delicacies}));


 // let checkbox = document.querySelector('input[type=checkbox')
	// checkbox.addEventListener('click', (event) => {
	// 	if()
	// });


app.get("/delicacies", (req, res) => {
	res.render("delicacies", {delicacies: delicacies});
});

app.post("/delicacies", urlencodedParser, (req, res) => {
	let name = req.body.name;
	let image = req.body.image;
	let alt = req.body.alt;
	let price = req.body.price;
	let date = req.body.date;
	let details = req.body.details;
	let newDelicacies = {name: name, image: image, alt: alt, price: price, date: date, details: details};
	delicacies.push(newDelicacies);
	//redirect back to delicacies page
	res.redirect("/products");
});

app.get("/delicacies/addproduct", (req, res) => {
	res.render("addproduct.ejs");
});







// app.post('/delicacies', (req, res) => {
// 	upload(req, res, (err) => {
// 		if (err){
// 			res.render('addproduct', {
// 				msg: err
// 			});
// 		} else {
// 			if(req.file == undefined){
// 				res.render('addproduct', {
// 					msg: 'Error: No File Selected!'
// 				});
// 			} else {
// 				res.render('addproduct', {
// 					msg: 'File Uploaded!',
// 					file: `uploads/${req.file.filename}`
// 				});
// 			}
// 		}
// 	});
// });


app.listen(3000, () => console.log("server is listening..."));

