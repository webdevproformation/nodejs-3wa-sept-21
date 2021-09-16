// 04-middleware.js

const express = require("express");
const {appendFile, writeFile} = require("fs");
const { userInfo } = require("os");

const app = express();
const PORT = process.env.PORT || 1234

// app.use();

// en fonction de la méthode de l'url requete => traitement => reponse
// avant de recevoir la demande req => traitement avant 
// vérifier que la personne s'est bien connecté => droit
// vérifier que l'utilisateur dispose bien d'un cookie
// express met à disposition d'un manière de code middleware
function middleware1 ( req, rep , next ){
    console.log("verification des droits de l'utilisateur");
    const login = req.params.login ;
    if(login == "admin"){
        return next();
    }
    rep.status(401).send("veuillez saisir un login conforme pour accéder au back office");
}
function middleware2 ( req, rep , next ){
    console.log("ajout d'une information en base de donnée");
    appendFile("04-log-connexion", `nouvelle connexion - ${new Date()}\n`,"utf8" , ( error  ) => {
        console.log(error)
    });
    next();
}
// attention à l'ordre !! 

app.get("/admin/:login" , [ middleware1 , middleware2 ] , (req, rep)=> {
    // traitement 
    rep.status(200).send("Bienvenu dans le back office");
})
app.put("/" , (req, rep)=> {})
app.post("/" , (req, rep)=> {})
app.delete("/" , (req, rep)=> {})

app.listen( PORT , () => console.log(`port ${PORT}`));

// export PORT= && nodemon 04-middleware.js

// créer le fichier 05-exo.js
// utilise express sur le port 2222

// post sur http://localhost:2222
// avant de trouver une réponse vous allez effectuer un traitement via un middleware 

/*{
    "id": 1,
    "isActive": true,
    "age": 30,
    "name": "Peck Hawkins",
    "gender": "male",
    "email": "peckhawkins@edecine.com"
  } */

// transformer => "gender": "male" => "gender": "homme"
// ajouter une nouvelle propriété à la valeur postée => dt_creation : JJ/MM/AAAA

// afficher la valeur dans le client 