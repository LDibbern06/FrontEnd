var prompt = require("prompt-sync")();

//Calculadora Simples

//Funções
//soma
function soma(a,b){
    return (a+b);
}
//Subtracao
function Subtracao(a,b) {
    retunr (a+b);
}
//Multiplicação
function Multiplicacao(a,b) {
    return (a+b);
}
//divisão
function divisão(a,b) {
    return (a+b);
}

function menu(){
    console.log("Escolha a operação desejada")
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");

    let operacao = Number(prompt());
    switch (operacao) {
        case 1:
            var a = Number(prompt("Informe o 1 numero "));
            var b = Number(prompt("Informe o 2 numero "));
            console.log(sub(soma(a,b)));
            break;

        case 2 :
            var a = Number(prompt("Informe o 1 numero "));
            var b = Number(prompt("Informe o 2 numero "));
            console.log(Subtracao(a,b));
            break;

        case 3 :
            var a = Number(prompt("Informe o 1 numero "));
            var b = Number(prompt("Informe o 2 numero "));
            console.log(Multiplicacao(a,b));
            break;

        case 4 :
            var a = Number(prompt("Informe o 1 numero "));
            var b = Number(prompt("Informe o 2 numero "));
            if (b===0) {
                console.log("Não sera dividido")
            }
        default:
            console.log("Operação Invalida")
            break;
    }
    menu;
    
}