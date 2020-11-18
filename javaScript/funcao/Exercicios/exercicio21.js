/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; 
4) conveniados acima de 60 anos pagam R$130 */

function planoSaude(idade) {
    let valorFixo = 100
    let valorAdicional = 0

    if(idade >= 0 && idade < 10) {
        valorAdicional = 80
    } else if(idade >= 10 && idade <= 30) {
        valorAdicional = 50
    } else if(idade > 30 && idade <= 60) {
        valorAdicional = 95
    } else if(idade > 60) {
        valorAdicional = 130
    } else {
        return 'Idade inválida!'
    }

    return `R$${(valorFixo + valorAdicional).toFixed(2).replace('.', ',')}`
}

console.log(planoSaude(0))
console.log(planoSaude(5))
console.log(planoSaude(10))
console.log(planoSaude(20))
console.log(planoSaude(31))
console.log(planoSaude(45))
console.log(planoSaude(59))
console.log(planoSaude(60))
console.log(planoSaude(87))
console.log(planoSaude(-10))