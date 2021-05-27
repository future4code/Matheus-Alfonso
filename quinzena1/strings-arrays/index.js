// Exercicios de interpretação de código
    //1. -------------------------------------------
        /*
            null
            null
            11
            3
            [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
            9
        */

    //2. -------------------------------------------
        /*
            SUBA NUM ONABUS EM MARROCOS 27
        */

// Exercicios de escrita de código
    //1. -------------------------------------------
        let nomeUsuario = prompt("Digite seu nome")
        let emailUsuario = prompt("Digite seu email")
        let fraseFinal = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`
        console.log(fraseFinal)
    
    //2. -------------------------------------------
        //a. -------------------------------------------
            let comidasFavoritas = ["Nhoque", "Lasanha", "Pizza", "Calzone", "Sushi"]
            console.log (comidasFavoritas)
        //b. -------------------------------------------  
            console.log("Essas são as minhsa comidas preferidas:")
            console.log(comidasFavoritas[0])
            console.log(comidasFavoritas[1])
            console.log(comidasFavoritas[2])
            console.log(comidasFavoritas[3])
            console.log(comidasFavoritas[4])
        //c. -------------------------------------------
            let comidaUsuario = prompt("Qual a sua comida preferida?")
            comidasFavoritas[1] = comidaUsuario
            console.log(comidasFavoritas)
    
    //3. -------------------------------------------
        //a. -------------------------------------------
            let listaDeTarefas = []
        //b. -------------------------------------------
            let tarefa1 = prompt("Digite uma tarefa a ser feita no dia")
            listaDeTarefas[0] = tarefa1
            let tarefa2 = prompt("Digite outra tarefa a ser feita no dia")
            listaDeTarefas[1] = tarefa2     
            let tarefa3 = prompt("Digite mais uma tarefa a ser feita no dia")
            listaDeTarefas[2] = tarefa3

        //c. -------------------------------------------
            console.log(listaDeTarefas)
        //d. -------------------------------------------
            let indiceTarefa = Number(prompt("Digite o indice de alguma tarefa que vc ja realizou: 0, 1 ou 2"))
        //e. -------------------------------------------
            listaDeTarefas.splice(indiceTarefa, 1)
        //f.
            console.log(listaDeTarefas)
