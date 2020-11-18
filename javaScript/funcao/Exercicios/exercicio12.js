/* 12) Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(numero) {
    let fatorial = 1
    for (let i = 1; i <= numero; i++) {        
        fatorial *= i      
    }
    return fatorial
}

console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))
console.log(fatorial(8))
console.log(fatorial(9))
console.log(fatorial(10))