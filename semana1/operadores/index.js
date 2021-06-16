/*Exercícios de interpretação de código
    1. -----------------------------------
        a. false
        b. false
        c. false
        d. boolean
    
    2. -----------------------------------
        O problema se encontra na hora de realizar a soma, pois os valores 
        recebidos pelo prompt sempre são STRING. 
    
    3. -----------------------------------
        Para resolver isso, precisamos converter esses valores para number 
        com a função Number e depois disso realizar algum calculo.

        Ex.:
           let primeiroNumero = Number(prompt("Digite um numero!"))
            let segundoNumero = Number(prompt("Digite outro numero!"))

            const soma = primeiroNumero + segundoNumero

            console.log(soma)
 */       
    //Exercícios de escrita de código
    //1. -----------------------------------   
        //a.
            let idadeUsuario = Number(prompt("Qual a sua idade?"))
        //b.
            let idadeAmigoUsuario = Number(prompt("Qual a idade do seu melhor amigo?"))
        //c.
            let resposta = "Sua idade é maior que a do seu amigo?"
            let comparaIdade = idadeUsuario > idadeAmigoUsuario
            console.log(resposta, comparaIdade)
        //d.
            let diferencaIdade = console.log("A diferença de idade é:", idadeUsuario - idadeAmigoUsuario)
    
    //2. -----------------------------------      
        //a.
            let numeroPar = Number(prompt("Digite um numero par"))
        //b.
            console.log(numeroPar % 2) 
        //c.
            // O resto sempre será zero.
        //d.
            // O resto sempre será 1.
    
    //3. ----------------------------------- 
        let idadeEmAnos = Number(prompt("Qual a sua idade?"))
        //a.
            console.log("Idade em meses:", idadeEmAnos * 12)
        //b.
            console.log("Idade em dias:", idadeEmAnos * 365)
        //c.
            console.log("Idade em horas:", idadeEmAnos * 8760)
    
    //4. -----------------------------------   
       let numero1 = Number(prompt("Digite um numero"))
       let numero2 = Number(prompt("Digite outro numero"))
       
       let comparacao1 = numero1 > numero2
       let comparacao2 = numero1 === numero2
       let comparacao3 = (numero1 % numero2) === 0
       let comparacao4 = (numero2 % numero1) === 0

       console.log("O primeiro numero é maior que o segundo?", comparacao1)
       console.log("O primeiro numero é igual ao segundo?", comparacao2)
       console.log("O primeiro numero é divisível pelo segundo?", comparacao3)
       console.log("O segundo numero é divisível pelo primeiro?", comparacao4)