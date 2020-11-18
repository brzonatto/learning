/* 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

let vetorA = [1, 2, 3, 4, 5]
let vetorB = [6, 7, 8, 9, 10]

function trocaVetores(vetor1, vetor2) {    
    if(vetor1.length == vetor2.length) {
        vetor1 = vetor1.concat(vetor2)
        for (let i = 0; i < vetor2.length; i++) {
            vetor2[i] = vetor1[i]
            vetor1.shift()
        }
    } else {
        console.log('Vetores com tamanhos diferentes!')
    }    
    console.log('Vetor A = ' + vetor1)
    console.log('Vetor B = ' + vetor2)
}

trocaVetores(vetorA, vetorB)