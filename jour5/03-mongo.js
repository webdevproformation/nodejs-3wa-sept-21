const express = require("express");
// mongoose 
// npm i mongoose
const mongoose = require("mongoose");
// remarque => sécurité il faut les mettre dans des variables d'environnement et pas en clair comme ça ...

mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.k1o57.mongodb.net/J5?retryWrites=true&w=majority" , { useNewUrlParser: true })
    .then( function(){
        console.log("nous sommes connecté à la base de données MongoDB")
    })
    .catch( function(error){
        console.log(error);
    });

// schema Mongoose
const etudiantSchema = mongoose.Schema({
    prenom : String,
    age : Number
});

const Etudiant = mongoose.model("j5", etudiantSchema); // Etudiant => access à la table J5 et de pouvoir effectuer le CRUD  .find()

async function getAllEtudiant(){
    const resultat = await Etudiant.find().limit(10);
    console.log( resultat );
}
getAllEtudiant();

async function ajouterEtudiant(){
    const etudiant = {
        prenom : "Vincent",
        age : 40
    }
    const nouveau = new Etudiant(etudiant);
    const resultat = await nouveau.save(); // effectuer l'enregistrement 
}

ajouterEtudiant();

// serveur client ip
// serveur node + express ip 
// serveur base de données MongoDB ip

const app = express();

app.get("/" , (req , rep) => {

})

app.listen(1235, () => console.log("OK"));

// stopper nodemon 
// 04-api.js
