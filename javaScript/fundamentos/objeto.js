const prod1 = {}
prod1.nome = 'Celular ultra mega'
prod1.preço = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
    obj: {
        atr: 1,
        obj2: {
            atr2: 2
        }
    }
}

console.log(prod2)