// // 1 - var, let e const
// var x = 10;
// var y = 15

// if (y > 10) {
//     var x = 5;
//     console.log(x);
// }

// console.log(x)

// let a = 10;
// let b = 15;

// if (b > 10) {
//     let a = 5;
//     console.log(a);
// }

// console.log(a);

// function logName() {
//     const name = "Pedro";
//     console.log(name);
// }

// const name = "Matheus";

// logName();

// console.log(name);

// // 2 - arrow function
// const sum = function(a, b) {
//     return a + b
// }

// const arrowSum = (a, b) => a + b;

// console.log(sum(5, 5));

// console.log(arrowSum(5, 5));

// const greeting = (name) => {
//     if (name) {
//         return `Hello ${name}!`;
//     } else {
//         return "Hello";
//     }
// }

// console.log(greeting("Pedro"));
// console.log(greeting(""));

// const user = {
//     name: "Theo",
//     sayUserName() {
//         setTimeout(function () {
//             console.log(this);
//             console.log(`Username: ${this.name}`);
//         }, 1000);
//     },
//     sayUserNameArrow() {
//         setTimeout(() => {
//             console.log(this);
//             console.log(`Username: ${this.name}`);
//         }, 2000);
//     }
// };

// // user.sayUserName();
// // user.sayUserNameArrow();

// // 3 - filter
// const arr = [1, 2, 3, 4, 5, 6];

// const highNumbers = arr.filter((n) => {
//     if (n >= 3) {
//         return n;
//     }
// });

// console.log(highNumbers);

// const users = [
//     {name: "Pedro", available: true},
//     {name: "Matheus", available: true},
//     {name: "Ana", available: false},
//     {name: "Flávio", available: false},
//     {name: "Amanda", available: true},
//     {name: "Beatriz", available: true},
// ]

// const availableUsers = users.filter((user) => user.available);

// console.log(availableUsers);

// // 4 - map
// const products = [
//     { name: "Camisa", price: 10.99, category: "Roupas" },
//     { name: "Fogão", price: 900.99, category: "Eletro" },
//     { name: "Máquina de lavar", price: 589.99, category: "Eletro" },
//     { name: "Calça", price: 109.99, category: "Roupas" },
//     { name: "Short", price: 99.99, category: "Roupas" },
// ];

// products.map((product) => {
//     if (product.category === "Roupas") {
//         products.onSale = true;
//     }
// });

// console.log(products);

// 5 - template literals
const userName = "Pedro";
const age = 20;

console.log(`O nome do desenvolvedor é ${userName} e ele tem ${age} anos!`);

// 6 - destructuring
const fruits = ["Maçã", "Banana", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(`${f1}, ${f3}`);

const productDetails = {
    name: "Mouse",
    price: 89.99,
    category: "Periférico",
    color: "Preto",
};

const { name: productName, price, category, color } = productDetails;

console.log(`Produto: ${productName}, preço: ${price} e cor: ${color}`);

// 7 - spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

const a4 = [a1, a2]

console.log(a3);
console.log(a4);

const a5 = [0, ...a3, 7];

console.log(a5);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 100000, price: 49999 };

const car = {...carName, ...carBrand, ...otherInfos};

console.log(car);

//  8 - classes
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
};

const shirt = new Product("Camisa gola V", 100);

console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(15));

// 9 - herança
class ProductWithAttributes extends Product {

    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Amarelo", "Verde"]);

console.log(hat);

console.log(hat.name);

hat.showColors();