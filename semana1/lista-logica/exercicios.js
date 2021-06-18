// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const mensagemAltura = Number(prompt("Digite a altura do retangulo:"))
  const mensagemLargura = Number(prompt("Digite a largura do retangulo:"))
  const areaRetangulo = mensagemAltura * mensagemLargura
  
  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const mensagemAnoAtual = Number(prompt("Digite o ano atual:"))
  const mensagemAnoNascimento = Number(prompt("Digite o ano que voce nasceu:"))
  const idadeAtual = mensagemAnoAtual - mensagemAnoNascimento

  console.log(idadeAtual)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt("Qual seu nome?")
  const idadeUsuario = prompt("Qual sua idade?")
  const emailUsuario = prompt("Qual seu e-mail?")
  const mensagemPronta = `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`

  console.log(mensagemPronta)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt("Digite a primeira cor favorita")
  const corFavorita2 = prompt("Digite a segunda cor favorita")
  const corFavorita3 = prompt("Digite a terceira cor favorita")

  const listaCoresFavoritas = [corFavorita1, corFavorita2, corFavorita3]

  console.log(listaCoresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringMaiuscula = string.toUpperCase()

  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeIngressos = (custo / valorIngresso) 

  return quantidadeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const checkTamanho = (string1.length) === (string2.length)

  return checkTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const checkPrimeiroElemento = array[0]

  return checkPrimeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const checkUltimoElemento = array[array.length - 1]

  return checkUltimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroElementoArray = array[0]
  let ultimoElementoArray = array[array.length - 1]
  array[0] = ultimoElementoArray
  array[array.length-1] = primeiroElementoArray

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const paraMinusculaString1 = string1.toLowerCase()
  const paraMinusculaString2 = string2.toLowerCase()
  
  const comparaMinusculas = paraMinusculaString1 === paraMinusculaString2

  return comparaMinusculas
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtualUsuario = Number(prompt("Qual o ano atual?"))
  const anoNascimentoUsuario = Number(prompt("Qual ano voce nasceu?"))
  const anoEmissaoIdentidade = Number(prompt("Qual ano voce nasceu?")) 

  const idadeUsuario = anoAtualUsuario - anoNascimentoUsuario 
  const tempoEmissaoIdentidade = anoAtualUsuario - anoEmissaoIdentidade 

  const renovar = ((idadeUsuario <= 20) && (tempoEmissaoIdentidade >= 5)) || ((idadeUsuario > 20) && (idadeUsuario < 50) && (tempoEmissaoIdentidade >= 10)) || ((idadeUsuario > 50) && (tempoEmissaoIdentidade > 15))

  console.log(renovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multiplosDe400 = ano % 400 == 0
  const multiplosDe100 = ano % 100 == 0
  const multiplosDe4 = ano % 4 == 0

  const result = multiplosDe400 || multiplosDe4 && !multiplosDe100

  return result
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idadeInscricao = prompt("Voce tem mais de 18 anos?") == "sim"
  const ensinoMedioInscricao = prompt("Voce tem ensino médio completo?") == "sim"
  const horariosInscricao = prompt("Voce tem disponibilidade exclusiva durante os horários do curso?") == "sim"

  const resultado = idadeInscricao && ensinoMedioInscricao && horariosInscricao

  console.log(resultado)
}