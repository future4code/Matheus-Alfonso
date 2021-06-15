// Exercícios de interpretação de código
/*  
    1. ------------------------------------------
        10
        10,5

    2. ------------------------------------------
        10, 10, 10

    3. ------------------------------------------
        horasPorDia
        salarioPorDia
*/  
// Exercícios de escrita de código

    //1. ------------------------------------------
        //a.
            let nome
        //b.
            let idade
        //c.
            console.log(typeof(nome))
            console.log(typeof(idade)) 
        //d.
            //Foi impresso undefined, pois criamos as variáveis e não definimos um valor para elas           
        //e.
            nome = prompt("Qual o seu nome?")
            idade = prompt("Qual a sua idade?")
        //f.
            console.log(typeof(nome))
            console.log(typeof(idade))        
            // Foi impresso string com os dados inseridos pelo usuário
        //g.
            console.log("Olá", nome, "você tem", idade, "anos.")    
    
    //2. ------------------------------------------ 
        //a.
            let frio = "Está frio?"
            let sol = "Está ensolarado?"
            let feriado = "É feriado?"

            let frioR = prompt(frio)
            let solR = prompt(sol)
            let feriadoR = prompt(feriado)
        //b.
            console.log(frio, "-", frioR)
            console.log(sol, "-", solR)            
            console.log(feriado, "-", feriadoR)
    
    //3. ------------------------------------------ 
        let a = 10
        let b = 25
        let c

        c = a
        a = b
        b = c

        console.log("O novo valor de a é", a)
        console.log("O novo valor de b é", b)

    //DESAFIO ------------------------------------------ 
        let numero1 = Number(prompt("Digite um numero"))
        let numero2 = Number(prompt("Digite outro numero"))

        let soma = numero1 + numero2
        let multiplica = numero1 * numero2

        console.log("A soma entre os dois numeros é", soma)
        console.log("A multiplicacao entre os dois numeros é", multiplica)
