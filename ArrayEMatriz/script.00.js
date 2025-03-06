// arrays e matrizes 

//declaraçao de uma array
let dados = []; //uso de conchetes permite a declaraçao do o uso de conchetes

let numeros = [1,2,3,4,5,6,7,8,9];
let palavras = ["Bola", "Sapato", "Caixa"];

console.log(numeros.length); // quantidade de elementos deo array

//infices do array 

//omprimir o 5 elemento de uma array  
console.log(numeros[4]); //5

//adicionar elementos em uma array

palavras.push("Cachorro"); //no final de array 
console.log(palavras);

palavras.unshift("Predio"); //no começo do array
console.log(palavras);

//Alterar o valor de um elemento
palavras[2]="Sacola";
console.log(palavras);

//percorrer uma array ( loop ) - for
for(let i = 0; i <numeros.length;i++){
    console.log("numero["+i+"]="+numeros[i])
}

//remover elementos
palavras.pop(); //remove o ultimo elemnto 
palavras.shift(); //remove o promeiro elemento
console.log(palavras);

//forEach - repetiçao em um vetor
palavras.forEach(palavras => {
    console.log(palavras);
})

//Splice
//remove pelo indice (splice(Posicao, quantidade))
palavras.slice(1,1);
console.log(palavras);

//manipulaçao de arrays
let numerosDobro = numeros.map(x => x*10);
console.log(numerosDobro);

