//Exercicio de interpretação.

/*
1. Imprimirá erro devida a ausência do CONST, LET ou VAR. 
Se tivesse sido declarada corretamente retornaria "10" na primeira e "10, 5" na segunda.


2. Imprimirá erro devida a ausência do CONST, LET ou VAR.
Se tivesse sido declarada corretamente retornaria "10, 10, 10"
*/


//Exercicio de escrita

//Exercicio 1
let nome;
let idade;

console.log(typeof nome, typeof idade);

// retornará undefined pois a variável está sem valor, como não tem nada atribuido não tem como definir o tipo

nome = prompt("Qual o seu nome? ");
idade = prompt("Qual a sua idade? ");

console.log(typeof nome, typeof idade);

//Como agora a variável tem valor então pode ser definido o tipo

console.log("Olá " + nome + ", você tem " + idade + " anos.");





//Exercicio 2

let cidade = prompt("Em que cidade você mora?");
console.log(cidade);

let idade = prompt("Quantos anos você tem?");
console.log(idade);

let serie = prompt("Qual sua série favorita?");
console.log(serie);

let cor = prompt("Qual a sua cor predileta?");
console.log(cor);

let irmao = prompt("Você possui quantos irmãos?");
console.log(irmao);




//Exercicio 3
//a
let comidasFavoritas = ["Mexicana", "Feijoada", "Churrasco", "Acarajé", "Rabada"];
console.log(comidasFavoritas);

//b
console.log("Essas são minhas comidas preferidas: ");
console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

//c
comidasFavoritas[1] = prompt("Qual sua comida preferida?");
console.log(comidasFavoritas);



//Exercicio 4

let perguntas = ["Você toma café?", "Você já viajou para fora do Brasil?", "Você pratica esporte?"];
let respostas = [false, true, true];

console.log(perguntas[0], respostas[0]);
console.log(perguntas[1], respostas[1]);
console.log(perguntas[2], respostas[2]);