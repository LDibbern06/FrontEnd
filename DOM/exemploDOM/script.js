function clickBtn(){
    // Manipulação pelo ID -> Variável tipo simples
    let titulo = document.getElementById("titulo");
    console.log(titulo);
    titulo.innerText = "Meu Titulo Modificado";

    let li = document.createElement("li");
    let texto = "Modificado Texto do Titulo"
    li.innerHTML = 'texto+<button onclick="btnConfere(this)">Confere</button>';

    document.querySelector(".lista").appendChild(li); // querySelector -> Variável Simples 

    // Manipulando todos os elementos com a classe .descricao e pintando de vermelho
    let descricao = document.getElementsByClassName("descricao");
    console.log("descricao");
    descricao.forEach(element => element.style.color = "red");
    texto = "Modificado Cor Da Classe descricao para Vermehlo";
    li.innerHTML = 'texto+<button onclick="btnConfere(this)">Confere</button>';
    document.querySelector(".lista").appendChild(li);
}