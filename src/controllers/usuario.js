const usuarioController = {}

usuarioController.cadastrar = function (app, req, res) {
    const login = req.params.usuario;
    const senha = req.params.senha;
    const email = req.params.email;
    const usuarioModel = new app.src.models.usuario;
    usuarioModel.cadastrar(login, senha, email,(err, result) => {
        if (result != null) {
            return res.redirect('/login')
        }
        return err
    })
}

module.exports = usuarioController;
