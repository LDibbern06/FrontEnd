//Usar o DOm para adiconar um evento no HTMl
document.getElementById("btnAdicionar").addEventListener("click", adicionarTarefa);

function adicionarTarefa(){
    let input = document.getElementById("tarefa");
    let texto = input.value.trim(); // pega o valor e recorta os espaços em branco antes e depois
    
    if(texto===""){
        return;//interrompe a função 
    }
    //continuar o codigo  - se texto nao for "";
    let li = document.createElement("li"); //criando um elemento de lista
    li.innerHTML =  texto+'<button onclik="removerTarefa (this)">Remover</button>'; //criei o conteudo od item da li(lista)

    let ul = document.getElementById("lista");
    ul.appendChild(li); //adicionar o item a lista

    input.value = "";// limpar o texto
}

function removerTarefa(botao){ // funçao do botao para remover o elemento pai(parent) (li)
    botao.parentElement.remove();
}