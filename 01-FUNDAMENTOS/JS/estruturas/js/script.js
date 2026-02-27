// // 1 - variáveis
// let nome = "Pedro";
// console.log(nome);

// nome = "Pedro Henrique";
// console.log(nome);

// const idade = 20;
// console.log(idade);

// // idade = 21;
// console.log(typeof nome);
// console.log(typeof idade);

// // 2 - mais sobre variáveis

// // let 2teste = "Inválido";
// // let @teste = "inválido";

// let a = 10, 
//     b = 20 ,
//     c = 30;

// console.log(a, b, c);

// const nomecompleto = "Pedro Henrique";
// const nomeCompleto = "Miranda Moura";

// console.log(nomecompleto);
// console.log(nomeCompleto);

// let _teste = "ok";

// let $teste = "ok";

// console.log(_teste, $teste);

// // 3 - prompt
// // const age = prompt("Digite a sua idade: ");
// // console.log(`Você tem ${age} anos!`);

// // 4 - alert
// // alert("Testando");
// // z = 10;
// // alert(`Número ${z}`);

// // 5 - math
// console.log(Math.max(10, 6 ,78, 3))

// console.log(Math.floor(6.91))

// console.log(Math.ceil(6.78))

// // 6 - console
// console.log("teste");

// console.error("Deu erro");

// console.warn("Aviso!");

// 7 - if
// const m = 10;

// if(m > 5) {
//     console.log("M é maior que 5");
// }

// const user = "João";

// if(user === "João") {
//     console.log("Olá João")
// }

// if(user === "Maria") {
//     console.log("Olá Maria")
// }

// console.log(user === "João", user === "Maria");

// //  8 - else
// const loggedIn = false;

// if(loggedIn) {
//     console.log("Está autenticado!")
// } else {
//     console.log("Não está autenticado!")
// }

// const q = 10;
// const w = 15;

// if(q > 5 && w > 20) {
//     console.log("Números maiores");
// } else {
//     console.log("Números menores");
// }

// // 9 - else if
// if (1 > 2) {
//     console.log("Teste");
// } else if (2 > 3) {
//     console.log("Teste 2");
// }else if (5 >1) {
//     console.log("Agora sim!");
// }

// const userName = "Pedro";
// const userAge = 20;

// if(userName === "José") {
//     console.log("Bem vindo José");
// } else if(userName === "Pedro" && userAge === 20) {
//     console.log("Olá Pedro, você tem 20 anos!");
// }else {
//     console.log("Nenhuma condição aceita!");
// }

// 10 - while
// let x = 0;

// while(x < 5) {
//     console.log(`Repetindo ${x}`)
//     x = x + 1;
// }

// // 11 - do while
// let o = 10;

// do {
//     console.log(`Valor de o: ${o}`);
//     o--;
// } while (o > 1);

// 12 - for
// for (let x = 0; x < 10; x++) {
//     console.log("Repetindo... ");
// }

// let p = 10;

// for(p; p > 0; p--) {
//     console.log(`Repetindo ${p}`);
// }

// // 13 - identação
// for (let u = 0; u < 10; u++) {
//     if(u * 2 >= 10){
//         console.log(`Maior que 10! ${u}`);
//     } else {
//         if(u / 2 === 0){
//             console.log("deu 0");
//         }
//     }
// }

// 14 - break
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);

    if(g === 15) {
        console.log(`O g é: ${g}!`)
        break;
    }
}

// 15 - continue
for(let s = 1; s < 10; s++) {
    if(s % 2 === 0) {
        console.log("Número par!")
        continue;
    } else {
        console.log(s)
    }
}

// 16 - switch
const job = "Programador";

switch(job) {
    case "Advogado":
        console.log("Você é um advogado!");
        break;
    case "Programador":
        console.log("Você é um programador!");
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro!");
        break;
    case "Dentista":
        console.log("Você é um dentista!");
        break;
    default:
        console.log("Profissão não encontrada!")
}

