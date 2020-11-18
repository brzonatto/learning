function gerarNumeros(min, max, tempo) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)        
    })
}

const gerarVariosNumeros = () => Promise.all([
    gerarNumeros(1, 60, 4000),
    gerarNumeros(1, 60, 1000),
    gerarNumeros(1, 60, 12000),
    gerarNumeros(1, 60, 2000),
    gerarNumeros(1, 60, 1000),
    gerarNumeros(1, 60, 1000)
])

gerarVariosNumeros()
    .then(console.log)