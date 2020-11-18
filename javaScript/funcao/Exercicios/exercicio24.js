/* 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. */

function imprime(frase) {
    let i = 1
    while (i <= 11) {
        console.log(`${i} - ${frase}`)
        i++
    }
}

imprime("Hello World!")