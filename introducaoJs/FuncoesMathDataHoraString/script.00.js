// Funçoes MAtematicas

//Sqrt // Pow
// raiz de 25
console.log(Math.sqrt(25)); //5

//Potencia
console.log(Math.pow(3,2)); //3² = 9
console.log(Math,pow(4,3)); //4³ = 64
console.log(Math.pow(27,1/3));

//Arredondamento 
//Math.round ( arredondar para o mais proximo)
console.log(Math.round(4.4)); //4
console.log(Math.round(4.7)); //5
//Math.floor ( para baixo)
console.log(Math.floor(4.9)); //4
//Math.ceil
console.log(Math.ceil(4.1)); //5

//numeros aleatorios 
console.log(Math.random()); //0 -> 1

//1 -> 100 -> inteiros
console.log(Math.ceil(Math.random()*100)); //
// o -> 99
console.log(Math.floor(Math.random()*100));

//1 -> 10000
console.log(Math.floor(Math.random()*1000));
//0 -> 9999
console.log(Math.floor(Math.random()*1000));

//0 -> 50
console.log(Math.round(Math.random()*50));
//50 -> 100
console.log(Math.round(Math.random()*50+50));

//Maximo, Minimo, Absoluto
var numeros = [0,1,2,3,4,5,6,7,8,9]; //array
console.log(Math.max(numeros)); //9 //maior numero da sequencia
console.log(Math.min(numeros)); //0 //menor numero da sequencia
var absoluto = -10;
console.log(Math.abs(absoluto)); //10 //modolo do numero
