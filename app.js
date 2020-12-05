var express = require('express')
var consign = require('consign')
var path = require('path')

var app = express()
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/lib'));
app.set('view engine', 'ejs')
app.set('views', './src/views')

consign()
    .include('src/routes')
    .then('src/models')
    .then('src/controllers')
    .into(app)


app.listen(8080, ()=>{
    console.log("Serv-on")
})

module.exports = app;
