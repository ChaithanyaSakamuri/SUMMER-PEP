let heading = document.getElementById("h1");
let paragraph = document.getElementsByClassName("para");
let tags = document.getElementsByTagName("p");
let query = document.querySelector(".para");

heading.innerText = "DOM Manipulation";
paragraph[0].innerText = "Hello JavaScript";
tags[1].style.color = "blue";

document.getElementById("btn").addEventListener("click", function () {
  alert("Button clicked!");
});