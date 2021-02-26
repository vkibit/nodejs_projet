// Imports
const express = require('express')
const app = express()
const port = 5000

// je définis mon processus d'écoute via le port
app.listen(port, () => console.log(`Le listener est sur le port ${port}`))
// Static Files
app.use(express.static('public'));

// ajout d'autres répertoire css, js, img, etc.
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/pics', express.static(__dirname + 'public/pics'))
app.use('/files', express.static(__dirname + 'public/files'))
app.use(express.static("vues"));

// Définitions du répertoire pour le rendus
app.set('views', './vues');
app.set('view engine', 'ejs');

// Le processus qui rend votre page ejs si une demande de type get
app.get('', (req, res) => {
    res.render('index', { mavar: 'Hello cool le nodejs !'})
    //res.render('about')
})
/*
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/vues/about.html')
})*/