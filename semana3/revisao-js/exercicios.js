// EXERCÍCIO 01
function inverteArray(array) {
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayPares = []
  let aoQuadrado
  for(i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      aoQuadrado = array[i] * array[i]
      arrayPares.push(aoQuadrado)
    }
  }
  return arrayPares
}

// EXERCÍCIO 03
  function retornaNumerosPares(array) {
    let arraySomentePares = []

    for(i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
        arraySomentePares.push(array[i])
      }
    }

    return arraySomentePares
  }

// EXERCÍCIO 04
  function retornaMaiorNumero(array) {
    let maiorNumero = 0

    for(i = 0; i < array.length; i++){
      if(array[i] > maiorNumero){
        maiorNumero = array[i]
      }
    }

    return maiorNumero
  }

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true]

  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let nNumerosPares = []

  for(i = 0; i < n*2; i++){
    if(i % 2 === 0){
      nNumerosPares.push(i)
    }
  }

  return nNumerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if (a === b && b === c && a === c){
    return "Equilátero"
  } else if (a === b && a != c) {
    return "Isósceles"
  } else {
    return "Escaleno"
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
