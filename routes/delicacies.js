const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

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


router.get("/delicacies", (req, res) => {
	res.render("delicacies", {delicacies: delicacies});
});


router.get("/products", (req, res) => res.render("products", {delicacies: delicacies}));



router.post("/delicacies", urlencodedParser, (req, res) => {
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

router.get("/delicacies/addproduct", (req, res) => {
	res.render("addproduct.ejs");
});


router.put("/delicacies/:id", (req, res) => {
	res.render("delicacies", {delicacies: delicacies});
});


router.delete("/delicacies/:id", (req, res) => {
	res.render("delicacies", {delicacies: delicacies});
});








module.exports = router;