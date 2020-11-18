const funcionarOuNao = (valor, chanceErro) => new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
        reject('Ocorreu um Erro')
    } else {
        resolve(valor)
    }
})

funcionarOuNao('Testando...', 0.9)
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))