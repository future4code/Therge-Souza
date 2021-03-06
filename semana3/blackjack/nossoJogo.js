/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//Mensagem de boas-vindas
console.log("Bem-vindo ao jogo de Blackjack")

//Perguntar se deseja jogar de novo
let jogarNovamente = confirm("Quer iniciar uma nova rodada?")

//Ação da resposta
if (jogarNovamente) {
    // O que fazer se o usuario escolher "sim"
    let carta1Usuario = comprarCarta()
    let carta2Usuario = comprarCarta()
    let carta1Computador = comprarCarta()
    let carta2Computador = comprarCarta()

    let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
    let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor

    console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontuacaoComputador}`)

    if (pontuacaoUsuario > pontuacaoComputador) {
        console.log("O usuário ganhou!")
    } else if (pontuacaoComputador > pontuacaoUsuario) {
        console.log("O computador ganhou!")
    } else if (pontuacaoUsuario === pontuacaoComputador) {
        console.log("Empate!")
    }
} else {
    // O que fazer se o usuario escolher "não"
    console.log("O jogo acabou!")
}