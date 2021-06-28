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
  let checaMaiorNumero
  let checaMenorNumero
  let checaMaiorDivisivelPorMenor


  if(num1 > num2){
    checaMaiorNumero = num1
    checaMenorNumero = num2
  }else{
    checaMaiorNumero = num2
    checaMenorNumero = num1
  }

  if(checaMaiorNumero%checaMenorNumero === 0) {
    checaMaiorDivisivelPorMenor = true
  } else{
    checaMaiorDivisivelPorMenor = false
  }

  let checaDiferenca = checaMaiorNumero - checaMenorNumero

  let objetoCompara = {
    maiorNumero: checaMaiorNumero,
    maiorDivisivelPorMenor: checaMaiorDivisivelPorMenor,
    diferenca: checaDiferenca
  }

  return objetoCompara
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {
  
}

// EXERCÍCIO 12
function filmeFavorito() {
  let objetoFilmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  return objetoFilmeFavorito
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  let objetoFilmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  }

  return `Venha assistir ao filme ${objetoFilmeFavorito.nome}, de ${objetoFilmeFavorito.ano}, dirigido por ${objetoFilmeFavorito.diretor} e estrelado por ${objetoFilmeFavorito.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

  let calculaPerimetro = 2 * (lado1 + lado2)
  let calculaArea = lado1 * lado2

  let retanguloCriado = {
    largura: lado1,
    altura: lado2,
    perimetro: calculaPerimetro,
    area: calculaArea
  }

  return retanguloCriado
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  let pessoaAnonima = {
    nome: "ANÔNIMO",
    idade: pessoa.idade,
    email: pessoa.email,
    endereco: pessoa.endereco
  }

  return pessoaAnonima
}

// EXERCÍCIO 16A
/*[
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]*/


function maioresDe18(arrayDePessoas) {
  let arrayMaiores = []
  for (i = 0; i < arrayDePessoas.length; i++){
    if(arrayDePessoas[i].idade >= 18){
      arrayMaiores.push(arrayDePessoas[i])
    }
  }

  return arrayMaiores
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let arrayMenores = []
  for (i = 0; i < arrayDePessoas.length; i++){
    if(arrayDePessoas[i].idade < 18){
      arrayMenores.push(arrayDePessoas[i])
    }
  }

  return arrayMenores
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  for(i = 0; i < array.length; i++){
    array[i] = array[i] * 2
  }

  return array
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  for(i = 0; i < array.length; i++){
    array[i] = array[i] * 2
  }

  arrayString = array.map(String)

  return arrayString
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let arrayParImpar = []

  for(i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      let frasePar = `${array[i]} é par`
      arrayParImpar.push(frasePar)
    } else {
      let fraseImpar = `${array[i]} é ímpar`
      arrayParImpar.push(fraseImpar)
    }
  }

  return arrayParImpar
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
