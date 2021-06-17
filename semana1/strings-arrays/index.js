/* Exercícios de interpretação de código
    1. ----------------------------------
        a. undefined
        b. null
        c. 11
        d. 3
        e. [3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        f. 9

    2. ----------------------------------
        SUBI NUM ONIBUS EM MIRROCOS 27
*/

//Exercícios de escrita de código
    // 1. ----------------------------------
                let emailDoUsuario = prompt("Digite seu email")
                let nomeDoUsuario = prompt("Digite seu nome")
                console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)
    
    // 2. ----------------------------------
                let comidasPreferidas = ["Nhoque", "Lasanha", "Pizza", "Churrasco", "Hamburger"]
        // a. ----------------------------------
                console.log(comidasPreferidas)
        // b. ----------------------------------
                console.log("Essas são as minhas comidas preferidas:")
                console.log(comidasPreferidas[0])
                console.log(comidasPreferidas[1])
                console.log(comidasPreferidas[2])
                console.log(comidasPreferidas[3])
                console.log(comidasPreferidas[4])
        // c. ----------------------------------
                comidasPreferidaUsuario = prompt("Digite sua comida preferida")
                comidasPreferidas.splice(1,0)
                comidasPreferidas[1] = comidasPreferidaUsuario
                console.log(comidasPreferidas)
        
    // 3. ----------------------------------
        // a. ----------------------------------
                let listaDeTarefas = []
        // b. ----------------------------------
                listaDeTarefas[0] = prompt("Digite a primeira tarefa a ser realizada hoje")
                listaDeTarefas[1] = prompt("Digite a segunda tarefa a ser realizada hoje")
                listaDeTarefas[2] = prompt("Digite a terceira tarefa a ser realizada hoje")
        // c. ----------------------------------  
                console.log(listaDeTarefas)
        // d. ----------------------------------      
                let tarefaEscolhida = Number(prompt("Digite o numero da tarefa que voce ja realizou 1, 2 ou 3"))
        // e. ----------------------------------
                let tarefaRemovida = listaDeTarefas.splice(tarefaEscolhida-1, 1)
        // f. ----------------------------------
                console.log(listaDeTarefas)
    
// DESAFIO -------------------------------------
    // 1. ----------------------------------
    // 2. ----------------------------------  
        let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
        let elementoProcurado = "Abacaxi"
        let indiceDoElementoProcurado = array.indexOf(elementoProcurado)
        console.log (indiceDoElementoProcurado, array.length)