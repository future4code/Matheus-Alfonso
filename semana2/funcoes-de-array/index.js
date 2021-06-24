/* Exercícios de escrita de código
    1. --------------------------------------
        Serão impressos os nomes e apelidos, seguidos do array original completo.
    2. --------------------------------------
        Será impresso um array com os NOMES do array original. 
    3. --------------------------------------
        Serão impressos todos os itens que não apresentam o apelido CHIJO
*/

//Exercícios de escrita de código
    //1. --------------------------------------
        //a.
            const pets = [
                { nome: "Lupin", raca: "Salsicha"},
                { nome: "Polly", raca: "Lhasa Apso"},
                { nome: "Madame", raca: "Poodle"},
                { nome: "Quentinho", raca: "Salsicha"},
                { nome: "Fluffy", raca: "Poodle"},
                { nome: "Caramelo", raca: "Vira-lata"}
            ]

            let arrayNomes = pets.map((nomePets) => {
                return nomePets.nome
            })

            console.log(arrayNomes)
        
        //b.
            let arraySalsicha = pets.filter((salsicha) => {
                return salsicha.raca === "Salsicha"
            })

            console.log(arraySalsicha)
        
        //c.
            let mensagemPoodle = pets.filter((poodle) => {
                if (poodle.raca === "Poodle") {
                    console.log(`Você ganhou um cupom de 10% para tosar o/a ${poodle.nome}`)
                }
            })

    //2. --------------------------------------
            const produtos = [
            { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
            { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
            { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
            { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
            { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
            { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
            { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
            { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
            { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
            { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
            ]
        //a.
            let nomeItens = produtos.map((nomeProdutos) => {
                return nomeProdutos.nome
            })

            console.log(nomeItens)
        
        //b.
           let itensDesconto = produtos.map((produtoInfos) => {
                let desconto = produtoInfos.preco * 0.05
                console.log (produtoInfos.nome, produtoInfos.preco - desconto)
           })
           
        //c.
           let apenasBebidas = produtos.filter((bebidas) => {
                return bebidas.categoria === "Bebidas"
           })
           
           console.log(apenasBebidas)
        
        //d.
           let nomeYpe = produtos.filter((ype) => {
                return ype.nome.includes("Ypê")
           })
        
           console.log(nomeYpe)
        
        //e.
           let nomeEPreco = nomeYpe.map((nomePrecoProduto) => {
                console.log(`Compre ${nomePrecoProduto.nome} por ${nomePrecoProduto.preco}`)
           })
           
// DESAFIO --------------------------------------
    const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
    ]

    //a.
       let nomeOrdemAlfabetica = pokemons.map((nome) => {
            return nome.nome
       })

       console.log(nomeOrdemAlfabetica.sort())
    
    //b.
        let tiposPokemon = pokemons.filter((item) => {
            let temGrama = false
            let temFogo = false
            let temAgua = false

            for(i = 0; i < pokemons.length; i++){
                if (item.tipo === "grama" && temGrama === false){
                    temGrama = true
                    pokemons.push(item.tipo)
                } else if (item.tipo ==="fogo" && temFogo === false) {
                    temFogo = true
                    pokemons.push(item.tipo)
                } else if (item.tipo === "água" && temAgua === false){
                    temAgua = true
                    pokemons.push(item.tipo)
                }
            }
        })

        console.log(tiposPokemon)