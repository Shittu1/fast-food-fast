let addToCartButton = document.querySelector('a.addtocartbutton');
let cartCount = document.querySelector('span.cartcount');

if(addToCartButton){
	addToCartButton.addEventListener('click', (event) => { 
	event.preventDefault(); 
	cartCount.style.display = "inline";
	// cartCount.textContent = Number(1);
	// cartCount.textContent++;
	// let name = this.delicacy["name"]; 
	// let price = this.delicacy["price"]; 
	// addItemToCart(name, price); 
}); 
}

let cart =[];
let Item = function (name, price, count) {
	this.name = name;
	this.price = price;
	this.count = count;
}

function addItemToCart (name, price, count) {
	for(let i in cart) {
		if(cart[i].name === name) {
			cart[i].count += count;
			return;
		}
	}
	let item = new Item(name, price, count);
	cart.push(item);
	saveCart();
}

function removeItemFromCart (name) {
	for(let i in cart) {
		if(cart[i].name === name) {
			cart[i].count--;
			if(cart[i].count === 0) {
				cart.splice(i, 1);
			}
			break;
		}
	}
	saveCart();
}

function removeItemFromCartAll (name) {
	for (let i in cart) {
		if(cart[i].name === name) {
			cart.splice(i, 1);
			break;
		}
	}
	saveCart();
}

function clearCart () {
	cart = [];
	saveCart();
}

function countCart () {
	let totalCount = 0;
	for(let i in cart) {
		totalCount += cart[i].count;
	}
	return totalCount;
}

//Total Cost in Cart
function totalCart () {
	let totalCost = 0;
	for(let i in cart) {
		totalCost += cart[i].price;
	}
	return totalCost;
}

function listCart () {
	let cartCopy = [];
	for (let i in cart) {
		let item = cart[i];
		let itemCopy = {};
		for(let p in item) {
			itemCopy[p] = item[p];
		}
		cartCopy.push(itemCopy);
	}
	return cartCopy;
}

function saveCart () {
	localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function loadCart () {
	cart = JSON.parse(localStorage.getItem("shoppingCart"));
}






































