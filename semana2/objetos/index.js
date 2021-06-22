/* Exercícios de interpretação de código
    1. -------------------------------------------
        a. 
            Matheus Nachtergaele
            Virginia Cavendish
            Globo, 14h

    2. -------------------------------------------
        a.  
            cachorro {nome: "Juca", idade: 3, raca: "SRD"}
            gato {nome: "Juba", idade: 3, raca: "SRD"}
            tartaruga {nome:"Jubo", idade: 3, raca: SRD}
        b. 
            Faz uma espécie de cópia do objeto referenciado

    3. -------------------------------------------
        a. 
            false
            undefined
        b.
            A função recebe o objeto e a propriedade por parâmetros, retorna a propriedade passada e mostra no console. No caso "backender: false" e "altura" não foi definida no objeto.
*/

// Exercícios de escrita de código
    //1. -------------------------------------------
        //a.    
            const pessoa = {
                nome: "Joao",
                apelidos: ["Joaozinho", "Jo", "Jao"]
            }     

            function  imprimeComObjeto (objeto){
                console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
            }

            let chama = imprimeComObjeto(pessoa)
            console.log(chama)
        
        //b.
            let novaPessoa = {...pessoa, apelidos: ["J", "Joaozera", "Joaozola"]}
            imprimeComObjeto(novaPessoa)

    //2. -------------------------------------------
        //a.
            const pessoa1 = {
                nome: "Ana",
                idade: "25",
                profissao: "Engenheira"
            }

            const pessoa2 = {
                nome:"Paulo",
                idade: "25",
                profissao: "Arquiteto"
            }
        //b.
            function arrayPessoa(pessoa){
                let arrayPronto = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]

                console.log(arrayPronto)

                return arrayPronto
            }

    //3. -------------------------------------------
        //a.
            let carrinho = []
        //b.
            const fruta1 = {
                nome: "Uva",
                disponivel: "true"
            }
            
            const fruta2 = {
                nome: "Banana",
                disponivel: "True"
            }

            const fruta3 = {
                nome: "Melancia",
                disponivel: "True"
            }
        //c.
            function adicionaFrutaCarrinho (fruta){
                carrinho.push(fruta)
            }
            
            adicionaFrutaCarrinho(fruta1)
            adicionaFrutaCarrinho(fruta2)
            adicionaFrutaCarrinho(fruta3)
        //d.
            console.log(carrinho)

        //Parte desafio
            function disponibilidadeInvertida (fruta){
                let novaDisponibilidade = fruta.disponivel = !fruta.disponivel


                return novaDisponibilidade
            }

            disponibilidadeInvertida(fruta1)

    //DESAFIOS -------------------------------------------
        //1. -------------------------------------------        
            function dadosUsuario (){
                let nomeUsuario = prompt("Qual o seu nome?")
                let idadeUsuario = Number(prompt("Qual a sua idade?"))
                let profissaoUsuario = prompt("Qual a sua profissão?")

                const informacoesUsuario = {
                    nome: nomeUsuario,
                    idade: idadeUsuario,
                    profissao: profissaoUsuario
                }

                console.log(informacoesUsuario)
                console.log(typeof informacoesUsuario)
           }

           dadosUsuario()

        //2. -------------------------------------------  
           function filmes(filme1, filme2){
                let lancadoAntes = filme1.anoLancamento < filme2.anoLancamento
                let lancadoMesmoAno = filme1.anoLancamento === filme2.anoLancamento

                console.log(`O primeiro filme foi lançado antes do segundo? ${lancadoAntes}`)
                console.log(`O primeiro filme foi lancado no mesmo ano do segundo? ${lancadoMesmoAno}`)
           }

           const primeiroFilme = {
               anoLancamento: 2000,
               nome: "O filme de 2000"
           }

           const segundoFilme = {
                anoLancamento: 2020,
                nome: "O filme de 2020"
           }

           filmes(primeiroFilme, segundoFilme)

        //3. -------------------------------------------  



