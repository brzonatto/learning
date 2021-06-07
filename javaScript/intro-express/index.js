const express = require('express')
const app = express()

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/user')

app.post('/user', usuarioApi.salvar)
app.get('/user', usuarioApi.obter)

app.use(saudacao('Brunno'))

app.use((req, res, next) => {
    console.log('Antes')
    next()
})

app.get('/clientes/relatorio', (req, res) => {    
    res.send(`Cliente relatório: completo ${req.query.completo} ano ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })
    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/teste', (req, res, next) => {
    console.log('Durante')
    res.json({
        data: [
            {id: 7, name: 'Brunno', idade: 28},
            {id: 4, name: 'Caroline', idade: 26},
            {id: 3, name: 'Renata', idade: 35}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })    
    next()
    // res.json({
    //     name: 'iPad 32Gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    // res.send('Estou bem!')
})

app.use((req, res) => {
    console.log('Depois')
})

app.listen(3000, () => {
    console.log('isRunning 2...')
})