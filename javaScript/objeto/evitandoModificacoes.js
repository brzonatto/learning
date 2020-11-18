// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {
    nome: 'Caroline',
    idade: 25
}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 26
console.log(pessoa)


//Object.freeze = selado + valores constantes