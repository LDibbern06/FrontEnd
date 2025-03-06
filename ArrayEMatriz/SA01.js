//Crie um formulario onde o usuario insira a nota
//Armazene essas notas em um array

const prompt =require("prompt-sync")();

let notas = []; //declarado o vetor de notas

function inserirNotas() {
    let nota = Number(prompt("Digite a nota: "));
    notas.push(nota);
}

function media() {
   let media = notas.reduce((media,nota)=>media+nota)/notas.length;
   console.log("A media é "+media);
}

function calcularMedia() {
    let continuar = true;
    while(continuar){
        console.log("====Sistema de Notas/Media====");
        console.log("|1. Inserir Notas |");
        console.log("|2 Inserir Media |");
        console.log("|3. Sair |");
        console.log("==============================");
        Operador = prompt("Informe a Opção: ");
        switch (Operador) {
            case "1":
                inserirNotas();
                break;
            case "2":
                calcularMedia();
                break;
            case "3":
                continuar = false;
                console.log("Saindo....");
                break;
            default:
                console.log("Informe uma Opção valida");
                break;
        } //fim do swith
    } //fim do while
    
} //fim da function 

menu();