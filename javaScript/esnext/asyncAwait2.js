function gerarNumeros(min, max, numerosProibidos) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            if(numerosProibidos.includes(aleatorio)) {
                reject('Número repetido!')
            } else {
                resolve(aleatorio)
            }                
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumeros(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 100) {
            throw 'Que chato!!'
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarNumeros(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)

gerarMegaSena(10, 100)
    .then(console.log)
    .catch(console.log)