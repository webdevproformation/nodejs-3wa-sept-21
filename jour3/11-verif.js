// 11-verif.js
// librairie télécharger depuis npm @hapi/joi
// cd jour3
// npm i @hapi/joi
const express = require("express");
const Joi = require("@hapi/joi");
const { response } = require("express");
const data = [];
const app = express();

const schema = Joi.object({ // schéma ce que doit contenir la réponse 
    // .js on ne peut pas typer les variables, on ne peut que les vérifier
    // .ts il est possible de typer les variables => via une interface 
    id : Joi.number().required() ,
    titre : Joi.string().min(3).max(200).required() 
});

app.use(express.json());

app.get("/", function(req, rep){
    rep.send(data);
});
app.post("/", (req, rep) => {
    const body = req.body;
    const verif = schema.validate( body , {abortEarly : false} );
    if(Object.keys(verif).length > 1){
        console.log(verif.error.details);
        return rep.send(verif.error.details);
    }
    // sécurité !!! avant de stocker des données dans des variables 
    // vérifier que ces données sont conformes 
    // { id : "chiffre positif" , titre : "string qui contient au moins 3 lettres et maximum 200 lettres" }
    data.push(body);
    rep.send(data);
});

app.listen(1238 , () => console.log("ok"));
// nodemon 11-verif.js

// créer un nouveau fichier 12-exo.js
// créer le schema validate pour l'objet suivant en utilisant la librairie @hapi/joi 
/*{
    nom :"Alain DOE", // string et min 3 max 30
    tel : "010101010101", // string exactement 10 caractères
    role : "admin", // admin / redacteur
    isActif : false, // boolean
    salaire : 2200 // chiffre positif
}*/
