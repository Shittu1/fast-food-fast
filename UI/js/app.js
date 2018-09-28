//Nav bar mobile/tablet dropdown menu
let navToggle = document.querySelector('header div i');
let navBar = document.querySelector('nav');

navToggle.addEventListener('click', () => {
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
let loginpassword = document.querySelector("#loginpassword");
let loginbutton = document.querySelector("#loginbutton");

if(loginbutton){
    loginbutton.addEventListener('click', () => {
        if(loginpassword.value === "admin"){
            window.open("../admin/allproducts.html");
        }
        if(loginpassword.value === "user"){
            window.open("../loggedin/delicacies.html");
        }
    });
}



//Incrementation of cart
let cart =[];

let addToCartButtons = document.querySelectorAll("a.addtocartbutton");
let cartCount = document.querySelector("a.cartcount");
let bracketleft = document.querySelector("span.bracketleft");
let bracketright = document.querySelector("span.bracketright");

let cartOperations = (function(){
    return (

            addToCartButtons.forEach(btn => btn.addEventListener("click", (event) => {
            event.preventDefault();
            cartCount.style.display = "inline";
            bracketleft.style.display = "inline";
            bracketright.style.display = "inline";
            cartCount.textContent++;
            let name = event.target.getAttribute('name');
            let price = Number(event.target.getAttribute('price'));
            let image = event.target.getAttribute('image');
            let cartitems = {name: name, price: price, image: image, count: 1};

            if(Object.keys(cart).indexOf(cart.name) == -1){
                cart.push(cartitems);
            }else if(Object.keys(cart).indexOf(cart.name) > -1){
                cart.count++;
            }
            saveCart();
            console.log(cart);

            }))

        );
        
})();