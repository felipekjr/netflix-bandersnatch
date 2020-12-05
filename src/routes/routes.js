const loginController = require('../controllers/login')

module.exports = function(app){

    app.get('/', (req, res)=>{
        res.redirect('/login')
    })

    app.get('/login', (req, res) => res.render("login.ejs"))
    app.post('/login/:usuario/:senha', (req, res) => loginController.entrar(app, req, res))

    app.get('/home', (req, res) => {
        res.render("home.ejs")
    })
    app.get('/video-player', (req, res)=>{
        res.render("video-player.ejs")
    })
}
