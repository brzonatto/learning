/* 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos. */

function progressaoAritmetica(numeroTermos, primeiroTermo, razao) {
    let soma = primeiroTermo
    for (let i = 1; i < numeroTermos; i++) {
        console.log(primeiroTermo + razao*i) 
        soma += primeiroTermo + razao*i       
    }
    console.log(`Soma: ${soma}`)
    //(n * (a1 + (a1 + ((n-1)*r))))/2
}

function progressaoGeometrica(numeroTermos, primeiroTermo, razao) {
    let soma = primeiroTermo
    for (let i = 1; i < numeroTermos; i++) {
        console.log(primeiroTermo * (razao**i)) 
        soma += primeiroTermo * (razao**i)       
    }
    console.log(`Soma: ${soma}`)
    //(a1 * ((r**n)-1))/(r-1)
}

progressaoAritmetica(10, 10, 15)
progressaoGeometrica(10, 5, 3)