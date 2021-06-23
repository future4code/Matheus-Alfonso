/* Exercícios de interpretação de código
    1. ---------------------------------------
        Adiciona 1 à variável valor a cada loop, até chegar no valor 4.
        4
    2. ---------------------------------------
        a.
            19, 21, 23, 25, 27, 30
        b.
            Sim. adicionar os colchetes depois da variável número
    3. ---------------------------------------
        *
        **
        *** 
        ****
*/

// Exercícios de escrita de código
//1. ---------------------------------------
let quantidadeEstimacao = Number(prompt("Quantos animais de estimação voce tem?"))

if (quantidadeEstimacao === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    for (i = 0; i < quantidadeEstimacao; i++) {
        let arrayEstimacao = []
        let nomesEstimacao = prompt(`Digite o nome do ${i + 1}`)
        arrayEstimacao[i] = nomesEstimacao
    }
    console.log(arrayEstimacao)
}

//2. ---------------------------------------
let arrayOriginal = [1, 2, 3, 4]

//a.
function imprimeValoresArray(array) {
    for (i = 0; i <= array.length - 1; i++) {
        console.log(arrayOriginal[i])
    }
}
imprimeValoresArray(arrayOriginal)
//b.
function imprimeValoresArrayDivididosPor10(array) {
    for (i = 0; i <= array.length - 1; i++) {
        let dividePor10 = arrayOriginal[i] / 10
        console.log(dividePor10)
    }
}
imprimeValoresArrayDivididosPor10(arrayOriginal)

//c.
function imprimeValoresParesArray(array) {
    let arrayPares = []
    for (i = 0; i <= array.length - 1; i++) {
        if (array[i] % 2 === 0) {
            arrayPares[i] = array[i]
        }
    }
    console.log(arrayPares)
}
imprimeValoresParesArray(arrayOriginal)

//d.
let arrayStrings = ["A", "B", "C"]
let novoArrayStrings = []

function imprimeStringIndex(array) {
    for (i = 0; i <= array.length - 1; i++) {
        novoArrayStrings[i] = `O elemento do index ${i} é: ${array[i]}`
    }
    return novoArrayStrings
}
imprimeStringIndex(arrayStrings)
console.log(novoArrayStrings)

//e.
function maiorEMenor(array) {
    let maiorNumero
    let menorNumero

    for (i = 0; i <= array.length - 1; i++) {
        if (array[i] < array[i - 1]) {
            let menorNumero = array[i]
        } else if (array[i] > array[i - 1]) {
            let maiorNumero = array[i]
        }

    }
    console.log(maiorNumero)
    console.log(menorNumero)
}

maiorEMenor(arrayOriginal)

