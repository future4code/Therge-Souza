//**Exercícios de interpretação de código**

/**
 * Exercicio 1
 * a. 10, 50
 * b. A função armazenaria o resultado mas como utiliza return não apareceria nada no console, pois return só guarda. Não imprime
 * 
 * Exercicio 2
 * a. Irá imprimir "Darvas" e "Caio", que pertecem respectivamente aos index 0 e 1.
 * b. "Amanda", "Caio"
 * 
 * Exercicio 3
 * Ela lê um array de numeros e com um laço condicional adiciona em outro array os numeros que forem pares
 * 
 */


//**Exercícios de escrita de código**
//a
function sobreMim() {
    console.log("Eu sou Therge, tenho 30 anos, moro em Brasília e sou estudante.")
}

sobreMim()

//b
function sobreMim2(nome, idade, cidade, estudante) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante .`)
}

sobreMim2("Therge", 30, "Brasília", true)


//Exercicio 5

//a.
function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(2, 5))

//b.
function bool(num1, num2) {
    return num1 >= num2
}
console.log(bool(10, 5))

//c.
function msg10times(message) {
    for (let i = 0; i < 10; i++) {
        console.log(message)
    }
}
console.log(msg10times("testando"))


//Exercicio 6

//a
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function qntElem(array) {

    return array.length
}
console.log(qntElem(array))

//b



function evenOrOdd(array) {
    let count = 0
    for (let num of array) {
        if (num % 2 === 0) {
            console.log(`${num} é par`)
            count += 1
        } else {
            console.log(`${num} é impar`)
        }
    }
    console.log("A quantidade de números pares é", count)
}

evenOrOdd(array)

//c
function justEven(array) {
    let count = 0
    for (let num of array) {
        if (num % 2 === 0) {
            count += 1
        }
    }
    console.log(count)
}

justEven(array)

//d
function justEven2(array) {
    evenOrOdd(array)
}

justEven2(array)



//DESAFIOS
//Exercicio 1
//1
let funcao1 = param => param
console.log(funcao1("therge"))

//2 
let funcao2 = (param1, param2) => param1 + param2
console.log(funcao1(funcao2(5, 10)))


//Exercicio 2
//a.
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let novoNumeros = []

function numPar(numeros) {
    for (let i of numeros) {
        if (i % 2 === 0) {
            novoNumeros.push(i * 2)
        }
    }
    console.log(novoNumeros)
}
numPar(numeros)

//b.
let maiorNumeros = 0

function maiorNumero(numeros) {
    for (let i of numeros) {
        if (i > maiorNumeros) {
            maiorNumeros = i
        }
    }
    console.log(maiorNumeros)
}
maiorNumero(numeros)

//c.
let maiorIndex = 0

function maiorIndice(numeros) {
    for (let i of numeros) {
        if (i > maiorIndex) {
            maiorIndex = numeros.indexOf(i)
        }
    }
    console.log(maiorIndex)
}
maiorIndice(numeros)

//d
function arrayReverso(numeros) {
    console.log(numeros.reverse())
}

arrayReverso(numeros)