//Operaçoes Avançadas em Vetores (Arrays)

//map - percorre e faz uma ação
numerosNovos.map = numeros.map(x => x*3);
console.log(numerosNovos);

//filter - percorre e faz uma seleção
let numeros = [10, 20, 30, 40, 50];

let numMaior20 = numeros.filter(x => x > 20);
console.log (numMaior20);

//reduce
let soma = numeros.reduce((acumulador, valorAtual)) => (acumulador + valorAtual,0);
console.log(soma); //150

//sort (organizador)
let aleatorio = [2, 5, 7, 1, 3, 8, 6, 9, 4, 0,]
aleatorio.sort();
console.log(aleatorio);