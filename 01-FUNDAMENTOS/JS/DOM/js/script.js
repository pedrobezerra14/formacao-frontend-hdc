// 1 - movendo-se pelo DOM
console.log(document.body);


console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].textContent);

// 2 - getElementsByTagName
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - getElementById
const title = document.getElementById("title");

console.log(title);

// 4 - getElementsByClassName
const products = document.getElementsByClassName("product");

console.log(products);

// 5 - querySelectorAll
const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// 7 - appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// 8 - replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Meu novo Título";

header.replaceChild(h2, title);

// 9 - createTextNode