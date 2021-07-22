// PERGUNTA A: Da um erro dizendo que a atribuição não é uma string
var minhaString = 2;
// PERGUNTA B: Você pode colocar (string|number) ou utilizar "any", porém essa segunda é melhor ser evitada de usar
var meuNumero = 2;
var umaPessoa = {
    nome: "Therge",
    idade: 30,
    corFavorita: "Azul"
};
console.table(umaPessoa);
//Pergunta D
var RainbowColor;
(function (RainbowColor) {
    RainbowColor["VERMELHO"] = "Vermelho";
    RainbowColor["LARANJA"] = "Laranja";
    RainbowColor["AMARELO"] = "Amarelo";
    RainbowColor["VERDE"] = "Verde";
    RainbowColor["AZUL"] = "Azul";
    RainbowColor["ANIL"] = "Anil";
    RainbowColor["VIOLETA"] = "Violeta";
})(RainbowColor || (RainbowColor = {}));
var coresFavoritas = {
    "class": RainbowColor.AZUL
};
//Exercicio 2
// A
function obterEstatisticas(numeros) {
    var numerosOrdenados = numeros.sort(function (a, b) { return a - b; });
    var soma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        soma += num;
    }
    var estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
var amostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: function () { }
};
var posts = [
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
];
//B
//As entradas são os posts e as informações do autor e as saida é a filtragem de post por autor
function buscarPostsPorAutor(posts, autorInformado) {
    return posts.filter(function (post) {
        return post.autor === autorInformado;
    });
}
