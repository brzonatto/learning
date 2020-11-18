/* 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function mediaAritmetica(vetor) {
    let soma = 0
    let media = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    return `Média: ${media = soma / vetor.length}`
    
}

let vetor1 = [1, 2, 3, 4, 5]

console.log(mediaAritmetica(vetor1))