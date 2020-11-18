const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo Descartável', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preco > 500 && p.fragil == true
}))

const isCaro = p => p.preco > 500
const isFragil = p => p.fragil

console.log(produtos.filter(isCaro).filter(isFragil))