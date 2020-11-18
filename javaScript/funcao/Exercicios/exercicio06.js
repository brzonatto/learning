/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    return `R$${(capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)).toFixed(2).replace('.',',')}`
}

function jurosComposto(capitalInicial, taxaJuros, tempoAplicacao) {
    return `R$${(capitalInicial * (1 + taxaJuros) ** tempoAplicacao).toFixed(2).replace('.',',')}`
}

console.log(jurosSimples(100, 0.1, 2))
console.log(jurosComposto(100, 0.1, 2))