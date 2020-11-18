function criarProduto(nome, preco) {    
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Bola', 50))
console.log(criarProduto('Bola Original', 120))