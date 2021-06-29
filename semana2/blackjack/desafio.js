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

// ------------------------------------------------------
// Variáveis iniciais resetadas
let arrayUsuario = []
let arrayComputador = []

let maoDecidida = false

let cartasCompradasTexto = ""

let contadorArray = 1

let contadorArrayComputador = 1

// ------------------------------------------------------
// Array functions (map)
let cartas = arrayUsuario.map((cartas) => {console.log(cartas.texto)})

let imprimeCartas = arrayUsuario.map((cartas) => {})

// ------------------------------------------------------
// Verifica se o jogador quer comprar ou não
// Acumula valores das cartas
// Compara os valores e estabelece vitória/derrota/empate
function comprarNovaCarta(){
   let decidiu = prompt(`Suas cartas são  ${cartasCompradasTexto}  e a primeira carta do computador é ${arrayComputador[0].texto}. Deseja comprar outra carta? s/n`)

   if (decidiu === "s"){
      let ultimaCartaComprada = arrayUsuario.push(comprarCarta())
      cartasCompradasTexto = cartasCompradasTexto + arrayUsuario[contadorArray].texto 
      contadorArray++
      acumulaCartas = acumulaCartas + arrayUsuario[contadorArray].valor
         if(acumulaCartas < 21){
            comprarNovaCarta()
         } else {
            maoDecidida = true
            console.log("Você perdeu")
         }

   }
   else {
      maoDecidida = true

      while((acumulaCartasComputador <= acumulaCartas) && (acumulaCartasComputador < 21)){
         let ultimaCartaCompradaComputador = arrayComputador.push(comprarCarta())
         contadorArrayComputador++
         acumulaCartasComputador = acumulaCartasComputador + arrayComputador[contadorArray].valor
      }

      if(acumulaCartas > acumulaCartasComputador){
         console.log("Parabéns, você ganhou!")
      } else if(acumulaCartas === acumulaCartasComputador){
         console.log("Empate")
      } else {
         console.log("Você perdeu!")
      }
   }
}

// ------------------------------------------------------
//Bloco principal
//Distribui as duas primeiras cartas e verifica se o jogador quer comprar outra carta
while(maoDecidida === false){
   arrayUsuario.push(comprarCarta())
   arrayUsuario.push(comprarCarta())
   arrayComputador.push(comprarCarta())
   arrayComputador.push(comprarCarta())

   let comprarM = prompt(`Suas cartas são 
   ${arrayUsuario[0].texto} 
   ${arrayUsuario[1].texto} 
   e a primeira carta do computador é 
   ${arrayComputador[0].texto}. 
   Deseja comprar outra carta? s/n`)

   cartasCompradasTexto = `${arrayUsuario[0].texto} ${arrayUsuario[1].texto} `

   var acumulaCartasComputador = arrayComputador[0].valor + arrayComputador[1].valor
   var acumulaCartas = arrayUsuario[0].valor + arrayUsuario[1].valor

   if(comprarM === "s"){
      comprarNovaCarta()
   } else {
      maoDecidida = true

      if(acumulaCartas > (arrayComputador[0].valor + arrayComputador[1].valor)){
         console.log("Parabéns, você ganhou!")
      } else if(acumulaCartas === (arrayComputador[0].valor + arrayComputador[1].valor)){
         console.log("Empate")
      } else {
         console.log("Você perdeu!")
      }
   }
}

