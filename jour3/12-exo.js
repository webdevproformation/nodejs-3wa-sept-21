const Joi = require("@hapi/joi");

const schema = Joi.object({
    nom : Joi.string().min(3).max(30).required(),
    tel : Joi.string().length(10).required(),
    role : Joi.string().regex(/^admin|redacteur$/).required(),
    isActif : Joi.boolean().required(),
    salaire : Joi.number().greater(0).required()
});

const body = {
    nom :"Alain DOE", // string et min 3 max 30
    tel : "0101010101", // string exactement 10 caractères
    role : "redacteurs", // admin / redacteur
    isActif : false, // boolean
    salaire : 2200 // chiffre positif
}

const verif = schema.validate(body , {abortEarly : false}); // permet d'afficher la liste des erreurs pour chaque champ

console.log(verif);
// nodemon 12-exo.js

// 13-crud.js