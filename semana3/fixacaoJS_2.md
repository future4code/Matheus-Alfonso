ˋˋˋ
    function calculaPrecoTotal(quantidade) {
        let precoMaca
        
        if(quantidade < 12){
            precoMaca = 1.30
        } else {
            precoMaca = 1
        }
        
        let custoTotalCompra = precoMaca * quantidade
        
        return custoTotalCompra
}
ˋˋˋ