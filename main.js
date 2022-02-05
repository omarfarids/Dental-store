// Dental store code 

// adding items to card list on click 
let cart = document.getElementById("cart");
let itemList = document.createElement("ul");
const CART_ITEMS = [];

let btn = document.querySelectorAll("button")
btn.forEach((ele)=>ele.addEventListener("click",
function adding(){

CART_ITEMS.push("<li>"+
document.getElementById(ele.className).innerHTML +
" " + document.getElementById(ele.className).nextElementSibling.firstChild.innerHTML+
"<button onclick='removeElement(this)'>remove</button></li>")
itemList.innerHTML = CART_ITEMS.join("");
    cart.appendChild(itemList);
    ele.style.background = "gray";
    ele.innerHTML = "In cart";
}));

// for adding to cart 
function addToCart(){
    cart.innerHTML = "";
    cart.style.cssText =
    "opacity:1;font-size:15px;";
}
// for removing from cart 
function removeElement(e){
    e.parentElement.style.display = "none";
}


// going forwards and backwards in the page 
let next = document.getElementById("next");
let prev = document.getElementById("previous");
let thisPage = document.querySelector(".active");

next.addEventListener("click",function(e){
    e.preventDefault();
    thisPage.nextElementSibling.click();
})
prev.addEventListener("click",function(e){
    e.preventDefault();
    thisPage.previousElementSibling.click();
})

// validate the Email 
let message = document.getElementById("validation");
let email = document.querySelector("footer input[type='email']")
message.innerHTML = "";
let validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

document.querySelector("footer form button").addEventListener("click",
function validate(e){
    if(!validEmail.test(email.value)){
        e.preventDefault();
        message.innerHTML = "Please enter a valid Email";
        email.style.border = "2px solid tomato"
        message.style.cssText = "color:tomato;margin:5px 0 0 15px;"
    }else{
        email.value = "";
        message.innerHTML = ""
    }
})


// hiding side bar
let hide = document.querySelector("nav > div a:first-child");
let display = false;
hide.addEventListener("click",function(e){
    e.preventDefault()
    if(display === false){
        document.querySelector("aside").style.display = "inline-block";
        display = true;
    }else{
        document.querySelector("aside").style.display = "none";
        display = false;
    }
    
})

