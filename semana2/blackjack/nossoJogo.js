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

console.log("Boas vindas ao jogo de Blackjack!")
let inicio = prompt('Quer iniciar uma nova rodada? digite "ok" para começar ou "cancel" para encerrar o jogo')

switch(inicio){
   case "ok":
         const carta1Computador = comprarCarta()
         const carta1Usuario = comprarCarta()
         const carta2Computador = comprarCarta()
         const carta2Usuario = comprarCarta()

         const resultadoComputador = carta1Computador.valor + carta2Computador.valor
         const resultadoUsuario = carta1Usuario.valor + carta2Usuario.valor
         
         console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${resultadoComputador}`)
         console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${resultadoUsuario}`)

         if(resultadoComputador > resultadoUsuario) {
            console.log("O computador ganhou!")
         } else if (resultadoUsuario > resultadoComputador){
            console.log("Você ganhou")
         } else {
            console.log("Empate!")
         }
      break;
   case "cancel":
      console.log("Jogo encerrado.")
      break;
}


