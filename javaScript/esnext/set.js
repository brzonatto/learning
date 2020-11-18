const { time } = require("console")

// não aceita repetição/não indexada
const times = new Set()
times.add('Grêmio')
times.add('Inter').add('Cruzeiro').add('Juventude')
times.add('Brasil de Pelotas')
times.add('Grêmio')

console.log(times)
console.log(times.size)
console.log(times.has('inter'))
console.log(times.has('Inter'))
times.delete('Inter')
console.log(times.has('Inter'))

const nomes = ['Brunno', 'Carol', 'Renata', 'Zenira']
const nomesSet = new Set(nomes)
console.log(nomesSet)