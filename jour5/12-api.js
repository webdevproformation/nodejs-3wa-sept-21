const express = require("express");
const mongoose = require("mongoose");

const url = "mongodb+srv://admin:admin@cluster0.k1o57.mongodb.net/J5?retryWrites=true&w=majority" ;

// Promise .then() .catch()
mongoose.connect(url , { useNewUrlParser: true })
        .then(() => console.log("vous êtes connecté à la base de données") )
        .catch( (error) => console.log(error)) 

// Promise function async qui contient des instructions avec des await + try catch 
/* const connexion = async () => {
    try{
        await mongoose.connect(url , { useNewUrlParser: true })
        console.log("vous êtes connecté à la base de données")
    }catch(error){
        console.log(error)
    }
}
connexion(); */

const schemaEtudiant = mongoose.Schema({
    prenom : String,
    age : Number,
    formation : String
});

const Etudiant = mongoose.model( "j5" , schemaEtudiant );

// insérer un nouveau profil dans la table j5
/* const etudiant = {
    prenom : "Martin",
    age : 12,
    formation : "3WAcademy"
}

const nouveau = new Etudiant( etudiant )

nouveau.save().then( ( reponseBase ) => { 
    console.log( reponseBase )
}); */

/* const insererNouveauEtudiant = async () => {
    const etudiant = {
        prenom : "René",
        age : 2,
        formation : "3WAcademy Web"
    }
    const nouveau = new Etudiant( etudiant )
    const reponseBase = await nouveau.save();
    console.log(reponseBase);
}
insererNouveauEtudiant() */


const insererNouveauEtudiant = async (etudiant) => {
    const nouveau = new Etudiant( etudiant )
    const reponseBase = await nouveau.save();
    return reponseBase;
}

const app = express();

/* app.post("/" , express.json() , async (req , rep) => {
    const body = req.body ;
    const reponse = await insererNouveauEtudiant(body)
    rep.send(reponse);
}) */

app.post("/" , express.json() , (req , rep) => {
    const body = req.body ;
    insererNouveauEtudiant(body).then((reponse) => rep.send(reponse))
})

app.listen(1239 , () => console.log("ok"));

// cas pratique 
// créer un nouveau fichier 13-exo.js 
// utiliser mongoose et express pour vous connecter à la base de données online et créer un serveur
// utiliser joi pour réaliser des validations 

// dans la base de données vous allez créer une nouvelle collection (table)
// achats
// lorsque vous allez appeler l'url http://localhost:1238 avec un méthode post
// vous allez insérer dans la collection achats un enregistrement
/*
    {
        dt_achat : 12/12/2021,
        montant : 200,
        devise : "euros",
        refs : [ 1234 , 1235 , 2222] 
    }
réaliser le code pour que ça fonctionne correctement 
*/


