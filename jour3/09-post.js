// 09-post.js
const express = require("express");
const data = [];
const app = express();
app.use(express.json()); // middleware express permet de json soit conforme 
app.get("/", function(req, rep){
    rep.send(data);
});
app.post("/", function(req, rep){ 
    // ajouter une nouvelle donnée dans la variable data 
    // récupérer les données envoyées par le client => req.body
    console.log(req.body);
    data.push(req.body);
    rep.send(data);
})
app.listen(1236 , function(){
    console.log("ok");
});

// créer le fichier 10-exo.js qui 
// utilise express pour créer un server 
// et une variable data = [ ]
// serveur
// GET http://localhost:1237/<id>
// rechercher est ce que le tableau data contient la valeur id ?? 

// POST http://localhost:1237/
// ajouter à la suite ( push ) la valeur dans le tableau data

// client postman
// postman => appeler la route  http://localhost:1237/ avec la méthode POST
// envoyer les données suivantes
// {id : 3 , nom : "PC portable"}
// {id : 15 , nom : "Ecran plasma"}

// postman => appeler la route  http://localhost:1237/15 avec la méthode GET
// [{id : 15 , nom : "Ecran plasma"}]

// postman => appeler la route  http://localhost:1237/1 avec la méthode GET
// Erreur 404 + aucun article ayant l'id 1 n'est disponible 
