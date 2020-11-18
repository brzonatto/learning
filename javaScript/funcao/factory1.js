const prod1 = {
    nome: 'Bola',
    preco: 45
}

const prod2 = {
    nome: 'Bola Original',
    preco: 120
}

// factory simples returna um objeto
function criarPessoa() {
    return {
        nome: 'Caroline',
        sobrenome: 'Fransechina'
    }
}

console.log(criarPessoa())
