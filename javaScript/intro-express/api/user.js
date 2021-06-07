function salvar(req, res) {
    res.send('user > salvar')
}

function obter(req, res) {
    res.send('user > obter')
}

module.exports = { salvar, obter }