ˋˋˋ
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let salarioFixo = 2000
let valorCarro = valorTotalVendas / qtdeCarrosVendidos
let descontoPorcentagem = valorCarro * (5/100)
let salarioFinal 
 
if(qtdeCarrosVendidos === 0){
  salarioFinal = salarioFixo
} else{
  salarioFinal = salarioFixo + (qtdeCarrosVendidos * (100 + descontoPorcentagem) )
}

return salarioFinal

}

ˋˋˋ