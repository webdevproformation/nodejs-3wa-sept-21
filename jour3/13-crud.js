const express = require("express");
const data = [
    { id : 22 , titre : "article à modifier" , contenu : "lorem ipsum lorem ipsum"}
];
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
app.put("/:id", (req, res) => { // http://localhost:1239/22
    // démarrer le logiciel Postman
    const id = req.params.id;
    // ESt ce que la variable data contient un enregistrement avec id = 22
    const articleAModifier = data.find( function(item) {
        return item.id == id ;
    })
    // si articleAModifier == undefined => article à modifier n'existe pas 
    // erreur 404 
    if(articleAModifier == undefined){
        return res.status(404).send(`l'article numéro ${id} n'existe pas`);
    }
    // est ce que les données envoyées par le client (postman) sont conformes ??
    const body = req.body ;
    const verif = schemaArticle.validate(body , {abortEarly : false});
    // { value , error }
    if(Object.keys(verif).length > 1){
        return res.status(400).send(`la requête est incorrecte`);
    }
    // Modification 
    const index = data.indexOf(articleAModifier);
    data[index] = body ;// modification effectuée
    res.send(data);
})

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


// créer le dossier jour4
// créer dans ce dossier le fichier package.json 
// installer en local les packages (pour ce dossier) express et @hapi/joi 

// créer le fichier 01-exo.js 
// réaliser un crud complet Create Read Update Delete 
// sur les données suivantes 
// vous pouvez stocker ces données dans un fichier 01-bdd.js et l'exporter comme module
// Sécurité : VEuillez verifier que les données sont conformes avec de les intégrer dans votre code !!
/**
 * [
  {
    "id": 1,
    "isActive": true,
    "age": 30,
    "name": "Peck Hawkins",
    "gender": "male",
    "email": "peckhawkins@edecine.com"
  },
  {
    "id": 2,
    "isActive": false,
    "age": 32,
    "name": "Mckinney Preston",
    "gender": "male",
    "email": "mckinneypreston@edecine.com"
  },
  {
    "id": 3,
    "isActive": true,
    "age": 37,
    "name": "Rebekah Weeks",
    "gender": "female",
    "email": "rebekahweeks@edecine.com"
  }
]
 * 
 * 
 */