/* Exercicios de interpretação de código
    1. ---------------------------------------
        a.
            Recebe um valor do usuário, o transforma em Number e verifica se o número é par.
        b.
            Números em que a divisão tem resto igual a zero.
        c.
            Números em que a divisão tem resto diferente de zero.

    2. ---------------------------------------
        a.
            Recebe o nome de alguma fruta do usuário e informa o custo dela.
        b.
            "O preço da fruta maçã é R$ 2.25"
        c.
            undefined

    3. ---------------------------------------
        a.
            Recebendo o primeiro número do usuário e o transformando em Number.
        b.
            10: "Esse número passou no test"
            -10:
        c.
            O segundo console.log não funcionará, pois a variável mensagem se encontra no escopo do if.
*/

//Exercícios de escrita de código
    //1. ---------------------------------------
        //a.b.
            let idadeUsuario = Number(prompt("Digite sua idade"))
        //c.
            if (idadeUsuario >= 18){
                console.log("Você pode dirigir.")
            } else {
                console.log("Você não pode dirigir.")
            }
    //2. ---------------------------------------
        let turno = prompt("Qual turno você estuda? M(Matutino), V(Vespertino ou N (Noturno)")
        
        if(turno === "M") {
            console.log("Bom dia")
        } else if (turno === "V") {
            console.log("Boa tarde")
        } else if (turno === "N") {
            console.log("Boa noite")
        }
    
    //3. ---------------------------------------
        switch (turno) {
            case "M":
                console.log("Bom dia")
                break;
            case "V":
                console.log("Boa tarde")
                break;
            case "N":
                console.log("Boa noite")
                break;
        }  

    //4. e 1 DESAFIO ---------------------------------------
        let generoFilme = prompt("Qual gênero de filme vamos assistir?")
        let precoIngresso = prompt("Qual o preço do ingresso?")

        if (generoFilme === "fantasia" && precoIngresso <= 15) {
            let lanchinho = prompt("Qual lanchino vai comprar? Pipoca ou chocolate?")
            switch(lanchinho){
                case "pipoca":
                    console.log(`Aproveite sua ${lanchinho}`)
                    break;
                case "chocolate":
                    console.log(`Aproveite seu ${lanchinho}`)
            }

            console.log("Bom filme!")
        } else {
            console.log("Escolha outro filme :(")
        }
     
//DESAFIOS ---------------------------------------
    //2. ---------------------------------------
        let nomeCompleto = prompt("Digite seu nome completo")
        let tipoDeJogo = prompt("Qual o tipo do jogo? IN ou DO")
        let etapaDoJogo = prompt("Qual a etapa do jogo? SF, DT ou FI")
        let categoriaDoJogo = Number(prompt("Categoria 1, 2, 3 ou 4?"))
        let quantidadeIngresos = Number(prompt("Quantidade de ingressos"))

        switch(jogo){
            case "DO":
                if(etapaDoJogo === SF) {
                    switch(categoria){
                        case "1":
                            let valorTotal = quantidadeIngresos * 1320
                            break;
                        case "2":
                            let valorTotal = quantidadeIngresos * 880
                            break;
                        case "3":
                            let valorTotal = quantidadeIngresos * 550
                            break;
                        case "4":
                            let valorTotal = quantidadeIngresos * 220
                            break;
                    }
                } else if (etapaDoJogo === DT){
                    switch(categoria){
                        case "1":
                            let valorTotal = quantidadeIngresos * 660
                            break;
                        case "2":
                            let valorTotal = quantidadeIngresos * 440
                            break;
                        case "3":
                            let valorTotal = quantidadeIngresos * 330
                            break;
                        case "4":
                            let valorTotal = quantidadeIngresos * 170
                            break;
                }}//SEM TEMPO 16:54
        }
