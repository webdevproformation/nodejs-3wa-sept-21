const express = require("express");
const Joi = require("joi");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 1238;
const LOGIN = process.env.LOGIN;
const MDP = process.env.MDP;

/*
connexion à la base de données
*/ 

const url = `mongodb+srv://${LOGIN}:${MDP}@cluster0.k1o57.mongodb.net/J5?retryWrites=true&w=majority`;

mongoose.connect( url , { useNewUrlParser: true } )
        .then( () => console.log("connexion BDD"))
        .catch( (error) => console.log( error ) );

/*
bdd insert
*/

const schemaAchatMongoose = mongoose.Schema({
    dt_achat : String,
    montant : Number ,
    devise : String ,
    refs : [ Number ]
});

const Achat = mongoose.model("achats", schemaAchatMongoose)

const insert = async (data) => {
    try{
        const nouveau = new Achat(data);
        const resultat = await nouveau.save();
        return resultat;
    }catch(error){
        console.log(error);
    }
}   

/*
validation Joi
*/

const schemaAchatJoi = Joi.object({
    dt_achat : Joi.string().regex(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/).required(),
    montant : Joi.number().greater(0).required(),
    devise : Joi.string().regex(/^euros|dollars$/),
    refs : Joi.array().items(Joi.number().greater(1000)).min(1).required() 
});


/*
serveur express
*/ 
const app = express();

const validation = (req, rep , next) => {
    const body = req.body;
    const {value , error} = schemaAchatJoi.validate(body , {abortEarly : false})
    if(error != undefined){
        return rep.status(400).send(error.message);
    }
    next();
}

app.post("/" , [express.json() , validation] , async (req, rep) => {
    const body = req.body;
    const resultat = await insert (body);
    rep.send(resultat);
});

app.listen(PORT, () => console.log(`serveur express start on port ${PORT}`))
