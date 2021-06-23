/* Exercicios de interpretação de código
    1. ---------------------------------------
        a.
            Recebe um valor do usuário, o transforma em Number e verifica se o número é par.
        b.
            Números em que a divisão tem resto igual a zero.
        c.
            Números em que a divisão tem resto diferente de zero.

    2. ---------------------------------------
        a.
            Recebe o nome de alguma fruta do usuário e informa o custo dela.
        b.
            "O preço da fruta maçã é R$ 2.25"
        c.
            undefined

    3. ---------------------------------------
        a.
            Recebendo o primeiro número do usuário e o transformando em Number.
        b.
            10: "Esse número passou no test"
            -10:
        c.
            O segundo console.log não funcionará, pois a variável mensagem se encontra no escopo do if.
*/

//Exercícios de escrita de código
//1. ---------------------------------------
//a.b.
let idadeUsuario = Number(prompt("Digite sua idade"))
//c.
if (idadeUsuario >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}
//2. ---------------------------------------
let turno = prompt("Qual turno você estuda? M(Matutino), V(Vespertino ou N (Noturno)")

if (turno === "M") {
    console.log("Bom dia")
} else if (turno === "V") {
    console.log("Boa tarde")
} else if (turno === "N") {
    console.log("Boa noite")
}

//3. ---------------------------------------
switch (turno) {
    case "M":
        console.log("Bom dia")
        break;
    case "V":
        console.log("Boa tarde")
        break;
    case "N":
        console.log("Boa noite")
        break;
}

//4. e 1 DESAFIO ---------------------------------------
let generoFilme = prompt("Qual gênero de filme vamos assistir?")
let precoIngresso = prompt("Qual o preço do ingresso?")

if (generoFilme === "fantasia" && precoIngresso <= 15) {
    let lanchinho = prompt("Qual lanchino vai comprar? Pipoca ou chocolate?")
    switch (lanchinho) {
        case "pipoca":
            console.log(`Aproveite sua ${lanchinho}`)
            break;
        case "chocolate":
            console.log(`Aproveite seu ${lanchinho}`)
    }

    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

//DESAFIOS ---------------------------------------
//2. ---------------------------------------
let nomeCompleto = prompt("Digite seu nome completo")
let tipoDeJogo = prompt("Qual o tipo do jogo? IN ou DO")
let etapaDoJogo = prompt("Qual a etapa do jogo? SF, DT ou FI")
let categoriaDoJogo = Number(prompt("Categoria 1, 2, 3 ou 4?"))
let quantidadeIngresos = Number(prompt("Quantidade de ingressos"))
let valorIngresso
let valorTotal
const dollar = 4.1

switch (tipoDeJogo) {
    case "DO":
        if (etapaDoJogo === "SF") {
            switch (categoriaDoJogo) {
                case 1:
                    valorIngresso = 1320
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 2:
                    valorIngresso = 880
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 3:
                    valorIngresso = 550
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 4:
                    valorIngresso = 220
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
            }
        } else if (etapaDoJogo === "DT") {
            switch (categoriaDoJogo) {
                case 1:
                    valorIngresso = 660
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 2:
                    valorIngresso = 440
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 3:
                    valorIngresso = 330
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 4:
                    valorIngresso = 170
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
            }
        } else if (etapaDoJogo === "FI") {
            switch (categoriaDoJogo) {
                case 1:
                    valorIngresso = 1980
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 2:
                    valorIngresso = 1320
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 3:
                    valorIngresso = 880
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 4:
                    valorIngresso = 330
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
            }
        }
        break;
    case "IN":
        if (etapaDoJogo === "SF") {
            switch (categoriaDoJogo) {
                case 1:
                    valorIngresso = 1320 * dollar
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 2:
                    valorIngresso = 880 * dollar
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 3:
                    valorIngresso = 550 * dollar
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 4:
                    valorIngresso = 220 * dollar
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
            }
        } else if (etapaDoJogo === "DT") {
            switch (categoriaDoJogo) {
                case 1:
                    valorIngresso = 660 * dollar
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 2:
                    valorIngresso = 440 * dollar
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 3:
                    valorIngresso = 330 * dollar
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 4:
                    valorIngresso = 170
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
            }
        } else if (etapaDoJogo === "FI") {
            switch (categoriaDoJogo) {
                case 1:
                    valorIngresso = 1980 * dollar
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 2:
                    valorIngresso = 1320 * dollar
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 3:
                    valorIngresso = 880 * dollar
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
                case 4:
                    valorIngresso = 330 * dollar
                    valorTotal = quantidadeIngresos * valorIngresso
                    break;
            }
        }
    break;
}

console.log("---Dados da compra---")
console.log(`Nome do cliente: ${nomeCompleto}`)
console.log(`Tipo do jogo: ${tipoDeJogo}`)
console.log(`Etapa do jogo: ${etapaDoJogo}`)
console.log(`Categoria: ${categoriaDoJogo}`)
console.log(`Quantidade de ingressos: ${quantidadeIngresos}`)
console.log(`---Valores---`)
console.log(`Valor do ingresso: ${valorIngresso}`)
console.log(`Valor total: ${valorTotal}`)


