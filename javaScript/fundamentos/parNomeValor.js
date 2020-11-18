// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa' // contexto léxico 2
    return saudacao

}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Brunno',
    idade: 27,
    peso: 80,
    endereco: {
        logradouro: 'Rua dos Maias',
        numero: '945/208'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)