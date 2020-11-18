/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

function desempenhoBasquete(str) {
    let strArray = str.split(' ')
    let melhorDesempenho = Number(strArray[0])
    let recordesBatidos = 0
    let piorDesempenho = Number(strArray[0])
        
    for (let i = 0; i < strArray.length; i++) {
        if(Number(strArray[i]) > melhorDesempenho) {
            melhorDesempenho = Number(strArray[i])
            recordesBatidos++
        }                
        if(Number(strArray[i]) < piorDesempenho) {
            piorDesempenho = Number(strArray[i])
        }        
    }
        
    let resultado = [recordesBatidos, strArray.indexOf(piorDesempenho.toString()) + 1]

    return resultado + `\nRecorde batido: ${resultado[0]} vezes.\nPior desempenho: ${resultado[1]}º jogo.`
}

string1 = '10 20 20 8 25 3 0 30 1'
string2 = '30 40 20 4 51 25 42 38 56 0 100'

console.log(desempenhoBasquete(string1))
console.log(desempenhoBasquete(string2))