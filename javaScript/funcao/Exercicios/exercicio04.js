/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function resultado(dividendo, divisor) {
    let divisao = Math.floor(dividendo / divisor)
    let resto = dividendo % divisor

    console.log(divisao)
    console.log(resto)
}

resultado(10, 6)