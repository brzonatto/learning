/* 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function compararString(string1, string2) {
    let strVetor = [string1.split(''), string2.split('')]    
    let existe = true
    for (let i = 0; i < strVetor[0].length; i++) {
        for (let j = 0; j < strVetor[1].length; j++) {
            if(strVetor[0][i] == strVetor[1][j]) {
                existe = true
                break
            } else {
                existe = false
            }            
        }        
    }
    for (let i = 0; i < strVetor[1].length; i++) {
        for (let j = 0; j < strVetor[0].length; j++) {
            if(strVetor[1][i] == strVetor[0][j]) {
                existe = true
                break
            } else {
                existe = false
            }            
        }        
    }

    return existe
}

console.log(compararString('palavrA12', 'palavra12'))