const message = document.getElementById("name");

const name = prompt("What is your name?");
if (name) {
  message.innerHTML = `Welcome, ${name}!`;
}
else {
  message.innerHTML = "Welcome, Guest!";
}

const welcome = document.getElementById("welcome");

welcome.textContent = "Welcome to my website! Guest";
welcome.style.color = "blue";
welcome.style.fontSize = "30px";

const button = document.getElementById("btn");
const list = document.getElementById("list");


button.addEventListener("click",() => {
   
    const li = document.createElement("li");
    list.textContent = "item " 
    list.appendChild("li");
    

});