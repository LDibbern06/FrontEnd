//Exercicio 1
let titulo = document.querySelector("#titulo");//select by id
console.log(titulo);

let paragrafo = document.querySelector(".paragrafo");//select by class
console.log(paragrafo);

let button = document.querySelector("button");//select by tab

//Exercicio 2 
function alterarTexto() {
    titulo.innerText="Novo Texto";
    paragrafo.innerText="Outro Paragrafo";
}

function alterarCorFundo() {
    document.style.backgroundColor = "blue";
}

//Exercicio 3
function alterarCorFundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";    
}

//Exercicio 4
function adicionarClasse(){
    titulo.classList.add("descricao");
    let descricao = document.querySelector(".descricao");
    descricao.style.color = "red";
}