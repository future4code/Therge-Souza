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

//Exercicio 2
// A
function obterEstatisticas(numeros:number[]){

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    type tipoNumeros = {
        maior: number,
        menor: number,
        media: number
    }

    const estatisticas:tipoNumeros = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//B todas são tipo Number


//C 
type idadesType = {
    numeros: number,
    obterEstatisticas: any
}

const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: () => {}
}

//Exercicio 3
//A

type tipagemPost = {
    autor: string,
    texto: string
}
const posts:tipagemPost[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]


//B
//As entradas são os posts e as informações do autor e as saida é a filtragem de post por autor


function buscarPostsPorAutor(
    posts:tipagemPost[], 
    autorInformado:string
): tipagemPost[] | [] {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}
