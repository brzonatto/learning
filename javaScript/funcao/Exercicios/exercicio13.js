/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function diaUtil(dia) {
    switch (dia) {
        case 1:
            console.log('Domingo: Feriado') 
            break
        case 2:
            console.log('Segunda: Util') 
            break
        case 1:
            console.log('Terça: Util')
            break
        case 3:
            console.log('Quarta: Util')
            break
        case 4:
            console.log('Quinta: Util')
            break
        case 5:
            console.log('Sexta: Util')
            break
        case 6:
            console.log('Sabádo: Util')
            break
        case 7:
            console.log('Domingo: Feriado') 
            break
        default:
            return 'Dia inválido!'
            break
    }
}

diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(5)
diaUtil(6)
diaUtil(7)
diaUtil('a')
