const loginController = require('../controllers/login')
const usuarioController = require('../controllers/usuario')
const manifestJSON = require('../../assets/manifest.json')

module.exports = function(app){
    app.get('/', (req, res)=>{
        res.redirect('/login')
    })

    app.get('/login', (req, res) => res.render("login.ejs"))
    app.post('/login/:usuario/:senha', (req, res) => loginController.entrar(app, req, res))

    app.get('/cadastro', (req, res) => res.render("cadastro.ejs"))
    app.post('/cadastro/:usuario/:senha/:email', (req, res) => usuarioController.cadastrar(app, req, res))

    app.get('/home', (req, res) => {
        res.render("home.ejs")
    })
    app.get('/video-player', (req, res)=> res.render("video-player.ejs", {config: manifestJSON}))
}
