/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

function extenso(numero) {
    switch (numero) {
        case 0:
            console.log('ZERO')
            break;
        case 1:
            console.log('UM')
            break;
        case 2:
            console.log('DOIS')
            break;
        case 3:
            console.log('TRÊS')
            break;
        case 4:
            console.log('QUATRO')
            break;
        case 5:
            console.log('CINCO')
            break;
        case 6:
            console.log('SEIS')
            break;
        case 7:
            console.log('SETE')
            break;
        case 8:
            console.log('OITO')
            break;
        case 9:
            console.log('NOVE')
            break;
        case 10:
            console.log('DEZ')
            break;
        default:
            console.log('Número fora do intervalo!')
            break;
    }
}

extenso(0)
extenso(1)
extenso(2)
extenso(3)
extenso(4)
extenso(5)
extenso(6)
extenso(7)
extenso(8)
extenso(9)
extenso(10)
extenso(11)