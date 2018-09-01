let loginpassword = document.querySelector("#loginpassword");
let loginbutton = document.querySelector("#loginbutton");

loginbutton.addEventListener("click", function(){
	if(loginpassword.value === "admin"){
		window.open("admin.html");
	}
});