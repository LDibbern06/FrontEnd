//EStrutura de Dados

// Coindicionais (IF Else; Switch Case)

var precoProduto = 150;

if (precoProduto>=100) {
    console.log("Valor a Pagar: "+ (precoProduto*0.9));
    
} else {
    console.log("Valor a Pagar: "+(precoProduto));
    
}

// Switch Case
 switch (mes) {
    case 1:
        console.log("Janeiro");
        break;

    case 2:
       console.log("Fevereiro");
       break;

    case 3:
        console.log("Março");
        break;
 
    default:
        console.log("Outro Mes");
        break;
 }

//Estrutura de Repetição (For ; While)

//for (ponto de Inicio; ponto de parada; incremento)

for (let index = 0; i < 10; i++) {
    console.log("Indice "+i);
}

//While (condição de parada == false)
var continuar = true;
var numeroEscolhido = 3;
var tentativas = 0;
while (condition) {
    let numeroSorteado = Math.round(match.randon()*10);
    if (numeroEscolhido==numeroSorteado) {
        continuar = false
    }
    tentativas++;
    console.log("N de tenativas : "+tentativas);
} 

//Funçoes (métodos)
function saudacao(nome) {
    return "Olá" + nome + "!!!";
}

console.log (saudacao("Dibbern"));

