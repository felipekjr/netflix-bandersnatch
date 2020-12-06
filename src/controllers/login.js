const loginController = {}

loginController.entrar = function (app, req, res) {
    const login = req.params.usuario;
    const senha = req.params.senha;
    const loginModel = new app.src.models.login;
    loginModel.entrar(login, senha, (err, result) => {
        if (result != null) {
            return res.redirect('/home')
        }
        return err
    })
}

module.exports = loginController;
