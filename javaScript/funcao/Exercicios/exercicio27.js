/* 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function crescimento(alt1, taxaCrescimento1, alt2, taxaCrescimento2) {
    let anosParaUltrapassar = 0
    console.log(`Nascimento\nCriança 1: ${alt1} cm\nCriança 2: ${alt2} cm\n`)
    if (alt1 < alt2) {
        if (taxaCrescimento1 > taxaCrescimento2) {
            while (alt1 <= alt2) {
                alt1 += taxaCrescimento1
                alt2 += taxaCrescimento2
                anosParaUltrapassar++
            }
            console.log(`Em ${anosParaUltrapassar} anos a criança 1 ultrapassará a criança 2, desse forma:`)
            console.log(`Criança 1: ${alt1} cm\nCriança 2: ${alt2} cm`)
        } else {
            console.log(`A taxa de crescimento da criança 1 é igual ou menor que a da criança 2, por isso ela nunca ultrapassará em altura!`)
        }
    } else if (alt2 < alt1) {
        if (taxaCrescimento2 > taxaCrescimento1) {
            while (alt2 <= alt1) {
                alt1 += taxaCrescimento1
                alt2 += taxaCrescimento2
                anosParaUltrapassar++
            }
            console.log(`Em ${anosParaUltrapassar} anos a criança 2 ultrapassará a criança 1, desse forma:`)
            console.log(`Criança 1: ${alt1} cm\nCriança 2: ${alt2} cm`)
        } else {
            console.log(`A taxa de crescimento da criança 2 é igual ou menor que a da criança 1, por isso ela nunca ultrapassará em altura!`)
        }
    } else {
        if(taxaCrescimento1 > taxaCrescimento2) {
            console.log(`A criança 1 será maior no futuro, pois a sua taxa de crescimento é maior!`)
        } else if(taxaCrescimento2 > taxaCrescimento1) {
            console.log(`A criança 2 será maior no futuro, pois a sua taxa de crescimento é maior!`)
        } else {
            console.log(`As crianças terão a mesma altura no futuro, pois as taxas de crescimento são iguais!`)
        }
    }
}

crescimento(28, 12, 20, 15)