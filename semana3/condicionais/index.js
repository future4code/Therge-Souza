//exercicio 1
/* O código pega um número digitado pelo usuário, transforma o tipo dela pra número 
depois tira o resto do número e se o resto for zero ele da a mensagem que passou no teste, caso contrário, que não passou
A mensagem "passou no teste é para números pares e a "não passou" para numeros impares */

//exercicio 2
/* a. O código serve para consultar preço de frutas.
b. "O preço da fruta Maçã é R$ 2.25"
c. "O preço da fruta  Pêra  é  R$  5"
 */

//exercicio 3
/**
 * a. a primeira linha solicita que o usuario digite um número
 * b. se digitar 10 a mensagem é: "Esse número passou no teste", se digitar -10 não iria aparecer nada.
 * c. Haverá um erro pois a váriavel 'mensagem' está dentro do bloco e só pertece ao escopo filho, 
 * quando ela é chamada, é chamada fora do escopo e por não ser global ou estar no mesmo bloco do 
 * console.log não será lida.
 */

//exercicio 4
let idade = Number(prompt("Informe a sua idade"))

if (idade >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

// //exercicio 5
const turno = prompt("Qual turno você estuda? Digite M para Matutino, V para Vespertino ou N para noturno")

if (turno === "M") {
    console.log("Bom dia")
} else if (turno === "V") {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}

//exercicio 6
const turno = prompt("Qual turno você estuda? Digite M para Matutino, V para Vespertino ou N para noturno")

switch (turno.toUpperCase()) {
    case "M":
        console.log("Bom dia")
        break
    case "V":
        console.log("Boa tarde")
        break
    case "N":
        console.log("Boa noite")
        break
    default:
        console.log("Digite novamente")
        break

}

//exercicio 7
const genero = prompt("Informe o gênero do filme")
const valor = Number(prompt("Qual o valor do ingresso?"))

if (genero === "fantasia" && valor < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}



//desafio 1

const genero = prompt("Informe o gênero do filme")
const valor = Number(prompt("Qual o valor do ingresso?"))

if (genero === "fantasia" && valor < 15) {
    let snack = prompt("Qual snack que você quer comprar?  (pipoca, chocolate, doces, etc)")
    console.log("Bom filme!")
    console.log(`... com ${snack}`)
} else {
    console.log("Escolha outro filme :(")
}

//desafio 2