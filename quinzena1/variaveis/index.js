//Exercícios de interpretaçao de código
    /*Ex. 1 -------------------------------------------
        10
        10, 5
    */

    /*Ex.2 --------------------------------------------
        10, 10, 10
    */

    /*Ex.3 ---------------------------------------------
        let horasPorDia
        let salarioPorDia
    */

    //

//Exercícios de escrita de código
  //Ex. 1 ----------------------------------------------
        let nome
        let idade

        console.log(typeof nome)
        console.log(typeof idade)
    // Esse tipo foi impresso (undefined), pois nenhum valor foi atribuido as variaveis.
        
        nome = prompt("Qual seu nome?")
        idade = prompt("Qual sua idade?") 

        console.log(typeof nome)
        console.log(typeof idade)
    // Foi impresso o tipo string para as variaveis
    console.log("Olá",  nome, "você tem", idade, "anos")


    //Ex.2 ---------------------------------------
        let checkChuva = prompt("Está chovendo?")
        let checkFrio = prompt("Está frio?")
        let checkNoite = prompt("É noite?")

        let chuva = console.log("Está chovendo? - ", checkChuva)
        let frio = console.log("Está frio? - ", checkFrio)
        let noite = console.log("É noite? - ", checkNoite)
    

    //Ex.3 ---------------------------------------
        let a = 10
        let b = 25
        let temp

        temp = b
        b = a
        a = temp

        console.log("O valor de a é:", a)
        console.log("O valor de b é:", b)

    // DESAFIO -----------------------------------
        let x = prompt("Digite um valor")
        let y = prompt("Digite outro valor")

        console.log("O primeiro numero somado ao segundo resulta em:", Number(x)+ Number(y))
        console.log("O primeiro numero multiplicado pelo segundo resulta em:", Number(x)*Number(y)) 
        
        