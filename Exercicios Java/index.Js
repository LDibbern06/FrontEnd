//EXERCICIO 1- 
 
console.log("Ambiente configurado com sucesso!");


//EXERCICIO 2
 
// Definição das variáveis

const nome = "Lucas";   // String

const idade = 18;        // Number

const altura = 1.75;     // Number

const programador = true; // Boolean
 
// Exibição no console
 
console.log("Nome:", nome);

console.log("Idade:", idade);

console.log("Altura:", altura, "m");

console.log("É programador?", programador);

 
//EXERCICIO 2-2
 
// Definição da variável anoNascimento como número

let anoNascimento = 1998;
 
// Conversão para String

let anoNascimentoStr = String(anoNascimento);

console.log("Ano de Nascimento:", anoNascimentoStr, "- Tipo:", typeof anoNascimentoStr);
 
// Definição da variável peso como String

let peso = "80.5";
 
// Conversão para número

let pesoNum = Number(peso);

console.log("Peso:", pesoNum, "- Tipo:", typeof pesoNum);

//EXERCICIO 2-3
 
const readline = require('readline-sync');
 
// Solicita dois números ao usuário

let numero1 = parseFloat(readline.question("Digite o primeiro número: "));

let numero2 = parseFloat(readline.question("Digite o segundo número: "));
 
// Realiza operações matemáticas

let soma = numero1 + numero2;

let subtracao = numero1 - numero2;

let multiplicacao = numero1 * numero2;

let divisao = numero1 / numero2;
 
// Exibe os resultados no console

console.log("Soma:", soma);

console.log("Subtração:", subtracao);

console.log("Multiplicação:", multiplicacao);

console.log("Divisão:", divisao);


//EXERCICIO 3
 
const readline = require('readline-sync');
 
// Solicita um número ao usuário

let numero = parseInt(readline.question("Digite um número: "));
 
// Verifica se é par ou ímpar

if (numero % 2 === 0) {

    console.log(`O número ${numero} é par.`);

} else {

    console.log(`O número ${numero} é ímpar.`);

}

 
//EXERCICIO 3-2
 
const readline = require('readline-sync');
 
// Solicita a idade ao usuário

let idade = parseInt(readline.question("Digite sua idade: "));
 
// Verifica as condições

if (idade < 16) {

    console.log("Você não pode votar.");

} else if (idade >= 16 && idade < 18) {

    console.log("O voto é opcional para você.");

} else {

    console.log("O voto é obrigatório para você.");

}
 
// Verifica se pode tirar a CNH

if (idade >= 18) {

    console.log("Você pode tirar a carteira de motorista.");

} else {

    console.log("Você ainda não pode tirar a carteira de motorista.");

}


 // Exercício 4.1 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Exercício 4.2
let numero = parseInt(prompt("Digite um número para ver a tabuada de 1 a 100:"));

if (!isNaN(numero)) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 100; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor, digite um número válido.");
}

// Exercício 4.3 
let contador = 10;
while (contador >= 1) {
    console.log(contador);
    contador--;
}
console.log("Feliz Ano Novo!");


// Exercício 5.1 
function boasVindas(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}

// Exemplo de uso
console.log(boasVindas("Lucas"));

  //Exercicio 1.3
  function maiorNumero(num1, num2) {
    return Math.max(num1, num2);
  }
  console.log(maiorNumero(10, 20)); // Saída: 20