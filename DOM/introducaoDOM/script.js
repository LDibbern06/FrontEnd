function alterarTexto() {
    document.getElementById("titulo").innerText = "Texto Alterado!";
}

// getElementById - seleção do elemento pelo ID
let titulo = document.getElementById("Titulo");
//variavel comum
titulo.style.color = "blue";

let descricao = document.getElementByIdgeClassName("descricao"); // todos os elementos de uma classe
// variavel vetor
descricao[0].style.fontWeight = "bold";
descricao[1].style.color = "green";

let todosdescricao = document.getElementsByTagName("p");
console.log(todosdescricao.length);

//querySelector -> Primeiro elemento
let primeiroDescricao = document.querySelector(".descricao");
primeiroDescricao.style.color = " red ";

//querySelectorAll -> Todos Elementos -> vetor
let ps = document.querySelectorAll("P");
ps.forEach(p => p.style.fontSize = "18px");
