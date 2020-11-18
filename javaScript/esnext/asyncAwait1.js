function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando Promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 3...'))

// async function executar() {
//     await esperarPor(1500)
//     console.log('Async/Await 1...')

//     await esperarPor(1500)
//     console.log('Async/Await 2...')

//     await esperarPor(1500)
//     console.log('Async/Await 3...')
// }

// executar()

const retornarValor = () => new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })


async function executar2() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)
}

executar2()