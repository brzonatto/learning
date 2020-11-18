/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function negativos(vetor) {
    let contNegativos = 0    
    for (const key in vetor) {
        if (vetor[key] < 0) {
            contNegativos++           
        }
    }
    console.log(`Negativos: ${contNegativos}`)
}

let vetor1 =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

negativos(vetor1)