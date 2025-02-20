var prompt = require("prompt-sync")();
//Desafio - Idade

//idade do usuário
var idade = Number(prompt("Insira a sua idade?"));

if (idade < 18) {
    console.log("Menor de Idade");
} 
else if (idade < 18) { 
        console.log("Voce e menor de idadde");
} else if ( idade >= 18 && idade < 60) {
    console.log("Você é adulto.");
} else {
    console.log("Você é idoso.");
}
// Desafio - Tabuada

for(let i=1; i<=10;i++);
console.log("5 X " +i+ "5 X");

// 1 a 20 numeros pares

for(let i=1; i<=20;1++){
if ((i%2)==0) {
    console.log(i +"é par");
}
}
