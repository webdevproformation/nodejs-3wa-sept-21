// 05-express.js
// installer express 
// npm i express 
// npm home express => ouvrir la page d'accueil de la documentation express 
// module natif http de nodejs pour créer des serveurs
// à partir de maintenant => express pour créer des serveurs 

const express = require("express");
const { readFile } = require("fs");
const app = express();

const voiture = {
    model : 206,
    description : function(){
        console.log("je suis une voiture");
    }
}

app.get("/" , function( req , rep ) {
    readFile("03-postman.js" , "utf8" , function(error, file){
        const reponse = [ voiture , file];
        // console.log(reponse);
        rep.send(reponse);
    })
    
    // dans rep.send()
    // pas besoin de rep.end()
    // http://localhost:2222 navigateur // postman 
    // convertir la réponse correctement
    // entête http application/json
});

app.get("/articles" , function(req, rep){
    readFile("01.articles.json" , "utf8" , function(error, file){
        rep.send(file);
    })
});

app.listen(2222, function(){
    console.log("le serveur express est démarré");
}); 
// nodemon 05-express.js