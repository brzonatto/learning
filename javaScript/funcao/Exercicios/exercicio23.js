/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function mediaPonderada(codigo, nota1, nota2, nota3) {     
    let notas = [nota1, nota2, nota3]
    
    if(nota1 > nota2 && nota1 > nota3) {
        notas[0] *= 4
        notas[1] *= 3
        notas[2] *= 3
    } else if(nota2 > nota1 && nota2 > nota3) {
        notas[0] *= 3
        notas[1] *= 4
        notas[2] *= 3
    } else {
        notas[0] *= 3
        notas[1] *= 3
        notas[2] *= 4
    }

    let media = (notas[0] + notas[1] + notas[2]) / 10

    return `Código do Aluno: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. Média final: ${media}, ${media < 5 ? 'Reprovado.' : 'Aprovado.'}`
}

console.log(mediaPonderada(123, 2.8, 6, 3.5))

function calcularNotaFinal(codigo, nota1, nota2, nota3){
    let notas = [nota1, nota2, nota3]    
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. Média final: ${mediaFinal}, ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)