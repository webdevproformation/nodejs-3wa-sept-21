const data = require("./01-bdd");
// cd ../jour4
// créer le fichier package.json => npm init -y // npm init --yes
// installer les packages locaux 
// npm i express @hapi/joi
// npm un @hapi/joi
// npm install joi

const express = require("express");
const schemaEtudiant = require("./01-schema");
const app = express();
app.use(express.json());

app.get("/" , (req , res) => {
    res.send(data);
})
app.post("/" , (req , res) => {
    const body = req.body ;
    const { value , error } = schemaEtudiant.validate(body , {abortEarly : false});
    const verif = schemaEtudiant.validate(body , {abortEarly : false});
    if(error != undefined){
        const message = error.message;
        return res.status(400).send(message);
    }
    data.push(body);
    res.send(data);
})
app.put("/:id" , (req , res) => {
    const id = req.params.id;
    const aModifier = data.find( item => item.id == id );

    if(aModifier == undefined){
        return res.status(404).send(`etudiant avec id ${id} introuvable`);
    }

    const body = req.body ;
    const { value , error } = schemaEtudiant.validate(body , {abortEarly : false});
    if(error != undefined){
        const message = error.message;
        return res.status(400).send(message);
    }

    // la mise à jour dans data
    const index = data.indexOf(aModifier);
    data.splice(index, 1, body);
    res.send(data);
})

app.delete("/:id" , (req , res) => {
    const id = req.params.id;
    const aSupprimer = data.find( item => item.id == id );

    if(aSupprimer == undefined){
        return res.status(404).send(`etudiant avec id ${id} introuvable`);
    }
    const index = data.indexOf(aSupprimer);

    // suppression
    data.splice(index, 1);
    res.send(data);
})

app.listen(1111, () => console.log("ok"))
// lancer le serveur nodemon 01-exo.js
