//Exercicios de interpretação de código
/*
1. --------------------------------------------------------
    a. false
    b. false
    c. true
    d. boolean

2. --------------------------------------------------------
    Os números serão concatenados pois é recebido como string no prompt

3. --------------------------------------------------------
    Transformar os valores recebidos no prompt para números
    Ex: 
        let primeiroNumero = Number(prompt("Digite um numero"!))
        let segundoNumero = Number(prompt("Digite outro numero!")) */

//Exercicios de escrita de código
//1. --------------------------------------------------------
    let idadeUsuario = Number(prompt("Qual a sua idade?"))
    let idadeAmigoUsuario = Number(prompt("Qual a idade do seu melhor amigo?"))

    console.log("Sua idade é maior que a do  seu amigo?", idadeUsuario > idadeAmigoUsuario)
    console.log("A diferenca de idade é:", idadeUsuario - idadeAmigoUsuario)

//2. --------------------------------------------------------
    //a.
        let numeroPar = Number(prompt("Digite um numero par"))

        console.log("Resto do numero digitado divido por 2:", numeroPar%4)
    
    //b.
        //O resultado sempre será 0, pois todo número par divido por 2 não terá resto.
    
    //c.
        //Caso seja inserido um número ímpar, o resto da divisão sempre terá diferente de zero.

//3. --------------------------------------------------------
        let idadeUser = Number(prompt("Digite a sua idade"))
    //a.
        console.log("Sua idade em meses:", idadeUser * 12)
    
    //b.
        console.log("Sua idade em dias:", idadeUser * 365)
    
    //c.
        console.log("Sua idade em horas:", idadeUser * 8760)

//4. --------------------------------------------------------

        let numero1 = Number(prompt("Digite um numero"))
        let numero2 = Number(prompt("Digite outro numero"))

        console.log("O primeiro numero é maior que segundo?", numero1 > numero2)
        console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
        console.log("O primeiro numero é divisível pelo segundo?", (numero1%numero2) === 0 )
        console.log("O segundo numero é divisível pelo primeiro?", (numero2%numero1) === 0)


// DESAFIOS 
    //1. ----------------------------------------------------
        //a.
            const aF = 77
            let kelvin = (((aF - 32) * (5/9)) + 273.15)
            console.log ("77 graus Fahrenheit equivalem a", kelvin, "graus Kelvin.")
        
        //b.
            const bC = 80
            let fahrenheit = ((bC * (9/5)) + 32)
            console.log ("80 graus Celsius equivalem a", fahrenheit, "graus Fahrenheit.")

        //c.
            const cC = 30
            let fahrenheit2 = ((cC * (9/5)) + 32)
            let kelvin2 = (((fahrenheit2 - 32) * (5/9)) + 273.15)

            console.log("30 graus Celsius equivalem a", fahrenheit2, "graus Fahrenheit e", kelvin2, "graus Kelvin." )

        //d.
            let dC = Number(prompt("Digite uma temperatura em graus Celsius"))
            let fahrenheit3 = ((dC * (9/5)) + 32)
            let kelvin3 = (((fahrenheit3 - 32) * (5/9)) + 273.15)

            console.log(dC ,"graus Celsius equivalem a", fahrenheit3, "graus Fahrenheit e", kelvin3, "graus Kelvin." )
      
    //2. ----------------------------------------------------
        const valorQuilowattHora = 0.05

        //a.
            const consumoA = 280
            let consumoTotal = valorQuilowattHora * consumoA
            console.log("O valor a ser pago será de R$", consumoTotal,)
        
        //b.
            const valorDesconto = 15
            const desconto = consumoTotal * 0.15
            const valorFinal= consumoTotal - desconto
            console.log("O valor a ser pago, com 15% de desconto, será de R$", valorFinal,)

    //3. ----------------------------------------------------
        //a.
            const valorLibras = 20
            let totalKg = valorLibras/2.2046
            console.log("20 libras equivalem a", totalKg, "Kg")
        
        //b.
            const valorOnças = 10.5
            let totalKg2 = valorOnças / 35.274
            console.log("10.5 onças equivalem a", totalKg2, "Kg")     
            
        //c.
            const valorMilhas = 100
            let totalMetros = valorMilhas / 0.00062137
            console.log("100 milhas equivalem a", totalMetros, "Metros")    
            
        //d.
            const valorPes = 50
            let totalMetros2 = valorPes / 3.2808
            console.log("50 Pés equivalem a", totalMetros2, "Metros")           
            
        //e.
            const valorGalao = 103.56
            let totalLitros = valorGalao / 0.26417
            console.log("103.56 Galões equivalem a", totalLitros, "Litros")          
        
        //d.
            const valorXicara = 450
            let totalLitros2 = valorXicara * 0.24
            console.log("450 Xícarass equivalem a", totalLitros2, "Litros")  
            
        //e.
            let valorUsuario = Number(prompt("Digite o número libras a ser convertido"))
            let valorUsuarioFinal = valorUsuario/2.2046
            console.log(valorUsuario,"libras equivalem a", valorUsuarioFinal, "Kg")
