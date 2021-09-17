const express = require("express");
const mongoose = require("mongoose");
const app = express();
const url = "mongodb+srv://admin:admin@cluster0.k1o57.mongodb.net/J5?retryWrites=true&w=majority";
mongoose.connect( url , { useNewUrlParser: true } )
        .then(() => {
            console.log("connexion OK")
        })
        .catch((err)=> {
            console.log(err);
        });
const schemaEtudiant = mongoose.Schema({
    prenom : String,
    age : Number
});
const Etudiant = mongoose.model("j5" , schemaEtudiant);
app.get("/" , async (req, rep) => {
    const resultat = await Etudiant.find().limit(10); // Promise réponse prend du temps 
    rep.send(resultat);
});
app.post("/" , express.json() , async (req, rep) => {
    const body = req.body;
    // Joi pour vérifier que body est bien conforme au schéma attendu par la base de données MongoDB
    const nouveau = new Etudiant(body);
    const resultat = await nouveau.save();
    rep.send(resultat);
});
app.listen(1235 , () => console.log("ok"));
// nodemon 04-api.js

// async / promise // callback => 
// bon appétit rdv 14h00 @ toute suite bon appétit !! 


// le code que l'on utilise est asynchrone 

// 05-async.js