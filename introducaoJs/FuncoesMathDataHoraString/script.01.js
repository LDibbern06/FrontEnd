//Funçoes Data e Hora

let agora = new Date();
console.log(agora.getDate);
console.log(agora.toLocaleDateString());

//Definicçao do objeto classe date()
//para variavel agora

//calculo com datas
let data1 = new Date("2025-01-23");
let data2 = new Date("2025-06-18");

let difrença = data2 - data1;

console.log((difrença/(1000*60*60*24))); // dias da difrença 

