//Imports nécessaires
const express = require('express')
const app = express()
const port = 5000
const parkings = require('./parkings.json')

/**
 * Import MongoClient et connexion au serveur bd Mongodb
 */
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://vkbg:mongokbg01@kbgcluster0.2utwb.mongodb.net/kbg?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

/*
const MongoClient = require('mongodb').MongoClient;
//const url = 'mongodb://localhost:27017';
const url = "mongodb+srv://vkbg:mongodbkbg01@kbgcluster0.2utwb.mongodb.net/kbg";
const dbName = 'kbg';
let db
MongoClient.connect(url, function(err, client) {
  console.log("Connecté avec succès au serveur Mongodb");
  db = client.db(dbName);
});
*/
app.use(express.json())

app.get('/parkings', async (req,res) => {
    try {
        const docs = await db.collection('parkings').find({}).toArray()
        res.status(200).json(docs)
        res.status(400).json('No pas possible')
    } catch (err) {
        console.log(err)
        throw err
    }
})

/* récupération d'un document avec paramètre (id du document)
   pour rappel, Mongodb crée un id pour chaque document d'une collection
*/
app.get('/parkings/:id', async (req,res) => {
    const id = parseInt(req.params.id) //permet de s'assurer que l'id en paramètre est de type integer
    try {
        //recherche dans la collection du document avec la méthode findOne
        const unDoc = await db.collection('parkings').findOne({id}) 
        res.status(200).json(unDoc)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.post('/parkings', async (req,res) => {
    try {
        const parkingData = req.body
        //ajout dans la collection du document avec la insertOne
        const parking = await db.collection('parkings').insertOne(parkingData)
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    }
    
})

app.put('/parkings/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const replacementParking = req.body
        //Modification du document dont l'id est passé en paramètre avec la méthode replaceOne
        const parking = await db.collection('parkings').replaceOne({id},replacementParking)
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.patch('/parkings/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const replacementParking = req.body
        //Modification du document dont l'id est passé en paramètre avec la méthode updateOne
        const parking = await db.collection('parkings').updateOne({id}, {$set: replacementParking}, {upsert:true})
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    } 
})

app.delete('/parkings/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        //Suppression du document dont l'id est passé en paramètre avec la méthode deleteOne
        const parking = await db.collection('parkings').deleteOne({id})
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    } 
})

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


app.listen(port, () => {
    console.log(`Serveur à l'écoute au port ${port}`)
})