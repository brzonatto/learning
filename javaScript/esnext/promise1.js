let a = 1
console.log(a)

let p1 = new Promise(function(resolve) {
    resolve(3)
})

p1.then(function(valor) {
    console.log(valor)
})

const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const letraMinusula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinusula)
    // .then(valor => console.log(valor))
    .then(console.log)