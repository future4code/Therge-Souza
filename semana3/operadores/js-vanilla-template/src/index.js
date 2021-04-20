/*
**Exercícios de interpretação de código**
1. 
    a. false
    b.false
    c. true
    e. boolean

2.
    a. undefined
    b. null
    c. 11
    d. 3
    e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    f. 9
*/



//**Exercícios de escrita de código**
//exercicio 1

let idade = prompt("Qual a sua idade?")
let idadeAmigx = prompt("Qual a idade do seu melhor amigo(a)? ")
let diferencaIdade = Number(idade) > Number(idadeAmigx)

console.log(`Sua idade é maior do que a do seu melhor amigo? ${diferencaIdade}`)
console.log("A diferença de idade é:" + (idade - idadeAmigx))
    //console.log("Sua idade é maior do que a do seu melhor amigo?" + diferencaIdade)

//exercicio 2

const numeroPar = Number(prompt("Insira um número par"))

console.log(numeroPar % 2)

//c. todo numero par o resto dividido por 2 é igual a 0

//d. O número impar, quando o resto é de 2 o resultado será igual 1

//Exercicio 3

let listaDeTarefas = []

const tarefa1 = prompt("Cite a primeira tarefa que você precisa realizar hoje")
const tarefa2 = prompt("Cite a segunda tarefa que você precisa realizar hoje")
const tarefa3 = prompt("Cite a terceira tarefa que você precisa realizar hoje")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas)

let i = Number(prompt("digite 0, 1 ou 2 para escolher o indice:"))

listaDeTarefas.splice(i, 1)

console.log(listaDeTarefas)


//exercicio 4

const nomeDoUsuario = prompt("Qual o seu nome?")
const emailDoUsuario = prompt("Qual o seu e-mail?")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}`)

//Desafio