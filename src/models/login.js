const fs = require('fs')

function login() {}

login.prototype.entrar = function(login, senha, callback) {
    fs.readFile('./data/usuarios.json', 'utf8', (err, result) => {
        let usuarioAutenticado = null;
        if (err) {
            return;
        }
        let usuarios = JSON.parse(result)['usuarios']
        usuarios.forEach(usuario => {
            if (usuario.login === login && usuario.senha === senha) {
                usuarioAutenticado = usuario;
            }
        });
        callback(err, usuarioAutenticado)
    })
}

module.exports = function () {
    return login;
}
