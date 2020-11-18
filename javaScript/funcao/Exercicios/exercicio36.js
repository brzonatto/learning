/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

function multiplicaVetor(vetor, multiplicador) {
    let novoVetor = []
    for (let i = 0; i < vetor.length; i++) {
        novoVetor.push(vetor[i] * multiplicador)        
    }
    return novoVetor
}

function multiplicaVetorMaior(vetor, multiplicador) {
    let novoVetor = []
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] > 5) {
            novoVetor.push(vetor[i] * multiplicador) 
        } else {
            novoVetor.push(vetor[i])
        }              
    }
    return novoVetor
}

let vetor1 = [1, 2, 3, 4, 5]

console.log(multiplicaVetor(vetor1, 3))
console.log(multiplicaVetorMaior(multiplicaVetor(vetor1, 3), 3))