const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

new Promise(resolve => {
    fs.readFile(caminho, (_, conteudo) => {
        resolve(conteudo.toString())
    })
})
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(' '))
    .then(conteudo => conteudo.split('\r'))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
    