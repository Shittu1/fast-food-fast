'use strict';

//Nav bar mobile/tablet dropdown menu
var navToggle = document.querySelector('header div i');
var navBar = document.querySelector('nav');

navToggle.addEventListener('click', function () {
    if (window.matchMedia("(max-width: 823px)").matches) {
        if (navBar.style.display === "none" || navBar.style.display == '') {
            navBar.style.display = "block";
            navBar.style.position = "absolute";
        } else {
            navBar.style.display = "none";
        }
    }
});

//For Rendering the Admin Dashboard
var loginpassword = document.querySelector("#loginpassword");
var loginbutton = document.querySelector("#loginbutton");

if (loginbutton) {
    loginbutton.addEventListener('click', function () {
        if (loginpassword.value === "admin") {
            window.open("../admin/allproducts.html");
        }
        if (loginpassword.value === "user") {
            window.open("../loggedin/delicacies.html");
        }
    });
}

//Incrementation of cart
var cart = [];

var addToCartButtons = document.querySelectorAll("a.addtocartbutton");
var cartCount = document.querySelector("a.cartcount");
var bracketleft = document.querySelector("span.bracketleft");
var bracketright = document.querySelector("span.bracketright");

var cartOperations = function () {
    return addToCartButtons.forEach(function (btn) {
        return btn.addEventListener("click", function (event) {
            event.preventDefault();
            cartCount.style.display = "inline";
            bracketleft.style.display = "inline";
            bracketright.style.display = "inline";
            cartCount.textContent++;
            var name = event.target.getAttribute('name');
            var price = Number(event.target.getAttribute('price'));
            var image = event.target.getAttribute('image');
            var cartitems = { name: name, price: price, image: image, count: 1 };

            if (Object.keys(cart).indexOf(cart.name) == -1) {
                cart.push(cartitems);
            } else if (Object.keys(cart).indexOf(cart.name) > -1) {
                cart.count++;
            }
            saveCart();
            console.log(cart);
        });
    });
}();