// PERGUNTA A: Da um erro dizendo que a atribuição não é uma string
const minhaString:(string|number) = 2

// PERGUNTA B: Você pode colocar (string|number) ou utilizar "any", porém essa segunda é melhor ser evitada de usar
const meuNumero:number = 2

//PERGUNTA C:

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const umaPessoa: pessoa = {
    nome: "Therge",
    idade: 30,
    corFavorita: "Azul"
}

console.table(umaPessoa)


//Pergunta D

enum RainbowColor {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"

}

type Colors = {
    class:RainbowColor
}

const coresFavoritas: Colors = {
    class: RainbowColor.AZUL
}