var prompt = require("prompt-sync")();
// Exercicios 1 - Par Impar
var numero = Number(prompt("Informe um Numero:"));

if ((numero%2)==0) {
    console.log("O Numero Digitado e Par");
}else{
    console.log("O Numero é Impar");
}

//Exercicio 2 - Laço for

for (let i = 1; i <= 100; i++) {
    console.log(i);
    
}


