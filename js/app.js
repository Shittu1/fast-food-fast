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
            window.open("../html/admin.html");
        }
    });
}
