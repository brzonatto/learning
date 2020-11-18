/* 19) O cardápio de uma lanchonete é o seguinte:
Código      Descrição do Produto         Preço
 100           Cachorro Quente          R$ 3,00
 200          Hambúrguer Simples        R$ 4,00
 300            Cheeseburguer           R$ 5,50
 400                Bauru               R$ 7,50
 500             Refrigerante           R$ 3,50
 600                Suco                R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function pedido(codigo, quantidade) {
    let total = 0
    switch (codigo) {
        case 100:
            total = quantidade * 3
            console.log(`Você pediu ${quantidade} Cachorro Quente no total de R$${total.toFixed(2).replace('.', ',')}`)
            break
        case 200:
            total = quantidade * 4
            console.log(`Você pediu ${quantidade} Hambúrguer Simples no total de R$${total.toFixed(2).replace('.', ',')}`)
            break
        case 300:
            total = quantidade * 5.5
            console.log(`Você pediu ${quantidade} Cheeseburguer no total de R$${total.toFixed(2).replace('.', ',')}`)
            break
        case 400:
            total = quantidade * 7.5
            console.log(`Você pediu ${quantidade} Bauru no total de R$${total.toFixed(2).replace('.', ',')}`)
            break
        case 500:
            total = quantidade * 3.5
            console.log(`Você pediu ${quantidade} Refrigerante no total de R$${total.toFixed(2).replace('.', ',')}`)
            break
        case 600:
            total = quantidade * 2.8
            console.log(`Você pediu ${quantidade} Suco no total de R$${total.toFixed(2).replace('.', ',')}`)
            break
        default:
            console.log('O código de produto não existe!')
            break
    }
}

pedido(100, 5)
pedido(200, 4)
pedido(300, 7)
pedido(400, 5)
pedido(500, 1)
pedido(600, 3)
pedido(200, 8)
pedido(1000, 5)