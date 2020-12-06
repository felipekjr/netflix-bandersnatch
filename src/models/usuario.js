const fs = require('fs')

function usuario() {}

usuario.prototype.cadastrar = function(login, senha, email, callback) {
    fs.readFile('./data/usuarios.json', 'utf8', (err, result) => {
        let novoUsuario = {"login": login, "senha": senha, "email": email};
        if (err) {
            return;
        }
        let usuarios = JSON.parse(result)['usuarios']
        usuarios.push(novoUsuario)
        const novoJSON = {"usuarios": usuarios}
        fs.writeFile('./data/usuarios.json',JSON.stringify(novoJSON), (err, result) => {
            callback(err, true)
        })
    })
}

module.exports = function () {
    return usuario;
}
