//Imports nécessaires
const express = require('express')
const app = express()
const port = 5000
//const parkings = require('./parkings.json')

const MongoClient = require('mongodb').MongoClient;
//const url = 'mongodb://localhost:27017';
const url = "mongodb+srv://vkbg:mongodbkbg01@kbgcluster0.2utwb.mongodb.net/test";

const dbName = 'actors';
let db
MongoClient.connect(url, { useUnifiedTopology: true },function(err, client) {
    try{
        db = client.db(dbName);  
        console.log("Connecté avec succès au serveur Mongodb");
    }
    catch (err) {
        console.log(err)
        throw err
    }
});

app.use(express.json())
app.get('/acteurs', async (req,res) => {
    try {
        const docs = await db.collection('acteurs').find({}).toArray()
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
app.get('/acteurs/:id', async (req,res) => {
    const id = req.params.id //permet de s'assurer que l'id en paramètre est de type integer
    try {
        //recherche dans la collection du document avec la méthode findOne
        const unDoc = await db.collection('acteurs').findOne({id}) 
        res.status(200).json(unDoc)
    } catch (err) {
        console.log(err)
        throw err
    }
})

/* récupération d'un document avec paramètre (id du document)
   pour rappel, Mongodb crée un id pour chaque document d'une collection
*/
app.get('/acteurs/:name', async (req,res) => {
    const c_name = req.params.name
    try{
        //recherche dans la collection du document avec la méthode findOne
        const unDoc = await db.collection('acteurs').find({ name : { $regex : c_name } })
        res.status(200).json(unDoc)
    } catch (err) {
        console.log(err)
        throw err
    }
})

/*
app.post('/acteurs', async (req,res) => {
    try {
        const parkingData = req.body
        //ajout dans la collection du document avec la insertOne
        const parking = await db.collection('acteurs').insertOne(parkingData)
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    }
    
})

app.put('/acteurs/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const replacementParking = req.body
        //Modification du document dont l'id est passé en paramètre avec la méthode replaceOne
        const parking = await db.collection('acteurs').replaceOne({id},replacementParking)
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.patch('/acteurs/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const replacementParking = req.body
        //Modification du document dont l'id est passé en paramètre avec la méthode updateOne
        const parking = await db.collection('acteurs').updateOne({id}, {$set: replacementParking}, {upsert:true})
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    } 
})

app.delete('/acteurs/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        //Suppression du document dont l'id est passé en paramètre avec la méthode deleteOne
        const parking = await db.collection('acteurs').deleteOne({id})
        res.status(200).json(parking)
    } catch (err) {
        console.log(err)
        throw err
    } 
})

*/
app.listen(port, () => {
    console.log(`Serveur à l'écoute au port ${port}`)
})