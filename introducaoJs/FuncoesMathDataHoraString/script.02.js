// Funçoes de String(texto)

var texto = "Aula de JavaScript";
console.log(texto.length); //contar o numero de caracteries 

console.log(texto.toUpperCase()); //tudo MAIUSCULO
console.log(texto.toLocaleLowerCase()); //tudo MINUSCULO

//MAnipulaçao de texto
console.log(texto.substring(0,4)); //aula
console.log(texto.slice(-10)); //JavaScript
console.log(texto.replace("JavaScript" , "TypeScript"));

//split (usar um caracter comum para separa em um vetor)

let linguagens = "JavaScript,C++,Python,Java,PHP";
let arrayLinguagens = linguagens.split(",");
console.log(arrayLinguagens);

// Trim (tesoura)
let tesoura = " JavaScript ";
console.log(tesoura.trim);