/* Exercícios de interpretação de código
    1. -------------------------------------
        a. -------------------------------------
            10
            50
        b. -------------------------------------
            O programa efetuaria as mesmas operações, porém, não apareceria no console.
    
    2. -------------------------------------
        a. -------------------------------------
            Recebe um texto do usuário, o transforma para minúsculo e verifica se existe a palavra "cenoura" nele.
        b. -------------------------------------
            true
            false
            false
*/

// Exercícios de escrita de código
    // 1. -------------------------------------    
        // a. ------------------------------------- 
<<<<<<< HEAD
                function quemSouEu (){
                    console.log("Eu sou Matheus, tenho 28 anos, moro no Rio Grande do Sul e sou estudante.")
                }
        // b. -------------------------------------  
                function quemSouEuParam(nome, idade, endereco, profissao){
                    let dadosUsuario = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`

                    return dadosUsuario
                }

    // 2. -------------------------------------    
        // a. -------------------------------------  
                function somaDoisNumeros(num1, num2){
                    let resultadoSoma = num1 + num2

                    return resultadoSoma
                }

                let soma = somaDoisNumeros(2, 3)
                console.log(soma)
        // b. -------------------------------------    
                function primeiroMaiorSegundo (x, y){
                    let isMaior = x > y

                    return isMaior
                }
        // c. -------------------------------------    
                function isPar (num){
                    let testePar = num % 2

                    return testePar === 0
                }
        // d. -------------------------------------    
                function tamanhoMaiuscula (mensagem){
                    let mensagemMaiuscula = mensagem.toUpperCase()
                    let mensagemTamanho = mensagem.length

                    console.log(mensagemMaiuscula)
                    console.log(mensagemTamanho)
                }
                
                tamanhoMaiuscula("Ola mundO")
                
    // 3. -------------------------------------  
                function somar (num1, num2){
                    let soma = num1 + num2
                    console.log(`Numeros inseridos ${num1} e ${num2}`)
                    console.log(`Soma: ${soma}`)
                }

                function subtrair(num1, num2){
                    let subtracao = num1 - num2
                    console.log(`Diferença: ${subtracao}`)
                }

                function dividir(num1, num2){
                    let divisao = num1 / num2
                    console.log(`Divisao: ${divisao}`)
                }

                function multiplicar (num1, num2){
                    let multiplicar = num1 * num2
                    console.log(`Multiplicacao: ${multiplicar}`)
                }

                let numero1 = Number(prompt("Digite um numero"))
                let numero2 = Number(prompt("Digite outro numero"))

                somar(numero1, numero2)
                subtrair(numero1, numero2)
                dividir(numero1, numero2)
                multiplicar(numero1, numero2)
                


=======
        function quemSouEu (){
            console.log("Eu sou Matheus, tenho 28 anos, moro no Rio Grande do Sul e sou estudante.")
        }
// b. -------------------------------------  
        function quemSouEuParam(nome, idade, endereco, profissao){
            let dadosUsuario = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`

            return dadosUsuario
        }

// 2. -------------------------------------    
// a. -------------------------------------  
        function somaDoisNumeros(num1, num2){
            let resultadoSoma = num1 + num2

            return resultadoSoma
        }

        let soma = somaDoisNumeros(2, 3)
        console.log(soma)
// b. -------------------------------------    
        function primeiroMaiorSegundo (x, y){
            let isMaior = x > y

            return isMaior
        }
// c. -------------------------------------    
        function isPar (num){
            let testePar = num % 2

            return testePar === 0
        }
// d. -------------------------------------    
        function tamanhoMaiuscula (mensagem){
            let mensagemMaiuscula = mensagem.toUpperCase()
            let mensagemTamanho = mensagem.length

            console.log(mensagemMaiuscula)
            console.log(mensagemTamanho)
        }
        
        tamanhoMaiuscula("Ola mundO")
        
// 3. -------------------------------------  
        function somar (num1, num2){
            let soma = num1 + num2
            console.log(`Numeros inseridos ${num1} e ${num2}`)
            console.log(`Soma: ${soma}`)
        }

        function subtrair(num1, num2){
            let subtracao = num1 - num2
            console.log(`Diferença: ${subtracao}`)
        }

        function dividir(num1, num2){
            let divisao = num1 / num2
            console.log(`Divisao: ${divisao}`)
        }

        function multiplicar (num1, num2){
            let multiplicar = num1 * num2
            console.log(`Multiplicacao: ${multiplicar}`)
        }

        let numero1 = Number(prompt("Digite um numero"))
        let numero2 = Number(prompt("Digite outro numero"))

        somar(numero1, numero2)
        subtrair(numero1, numero2)
        dividir(numero1, numero2)
        multiplicar(numero1, numero2)

// DESAFIO -------------------------------------  
    //1.
        //a. -------------------------------------  
            let imprimeParametro = (parametro) => {
                console.log(parametro)
            }
        //b. -------------------------------------   
            let somaNumeros = (number1, number2) => {
                somandoNumeros = number1 + number2
                imprimeParametro(somandoNumeros)
            }

        somaNumeros(2, 2)

    //2. -------------------------------------  
        function teoremaDePitagoras(n1, n2){
           hipotenusa = Math.sqrt(Math.pow(n1, 2) + Math.pow(n2, 2))

           return hipotenusa
        }

        let cateto1 = Number(prompt("Digite o primeiro cateto"))
        let cateto2 = Number(prompt("Digite o segundo cateto"))

        let valorHipotenusa = teoremaDePitagoras(cateto1, cateto2)
        console.log(valorHipotenusa)
>>>>>>> 52a6206cc8f4d33d22266925298cafa45cd468c6
