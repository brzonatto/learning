const moduloA = require('../../moduloA') // ../ para uma pasta anterior, nesse caso voltamos duas pastas
console.log(moduloA.bemVindo)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia HTTP')
    res.end()
}).listen(8080)