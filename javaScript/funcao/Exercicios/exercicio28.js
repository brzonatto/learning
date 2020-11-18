/* 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function paresImpares(vetor) {
    let par = 0
    let impar = 0
    for (const key in vetor) {
        if (vetor[key] % 2 == 0) {
            par++            
        } else {
            impar++
        }       
    }
    console.log(`Par: ${par}\nÍmpar: ${impar}`)
}

let vetor1 = [58, 5, 6, 8, 7, 12, 29, 120]

paresImpares(vetor1)