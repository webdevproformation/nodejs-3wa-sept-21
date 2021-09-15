const express = require("express");
const data = [];
const Joi = require("@hapi/joi");

const app = express();

const schemaArticle = Joi.object({
    id : Joi.number().greater(0).required(),
    titre : Joi.string().min(3).max(200).required(),
    contenu : Joi.string().min(3).max(2000).required(), 
})

// récupérer les données
app.get("/", (req, res) => {
    res.send(data);
})

app.use(express.json());

// ajouter des données dans la variable data 
app.post("/", (req, res) => { 
    const body = req.body;
    const verif = schemaArticle.validate(body , {abortEarly : false})
    if(Object.keys(verif).length > 1){
        return res.send(verif.error.message);
    }
    data.push( body );
    res.send(data);
})

// mis à jour
app.put("/:id", (req, res) => { })

// supprimer des données
app.delete("/:id", (req, res) => { 
    const id = req.params.id ;
    const articleASupprimer = data.find( function( item ){
        return item.id == id;
    })
    const index = data.indexOf(articleASupprimer);
    data.splice(index, 1);
    res.send(data);
})

app.listen(1239, () => console.log("ok"))
// nodemon 13-crud.js