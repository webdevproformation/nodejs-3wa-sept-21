/*

support en plus du support de 3Wacademy

url : https://formation.webdevpro.net/nodejs/
login : node 
mdp : js 

partage de notes : https://github.com/webdevproformation/nodejs-3wa-sept-21

Des questions ??? 

Module personnel => créer vos propres fichiers .js => partager 
require // module.exports 

NodeJS dispose de modules intégrés / natifs 
path
fs 
process
http

const fs = require("fs")

https://nodejs.org/api/
https://www.w3schools.com/nodejs/ref_modules.asp

=> module http permet de créer des serveurs

*/
const http = require("http");
const app = http.createServer();
// si le serveur reçoit une requête
app.on("request", function(request , response){
    if(request.url == "/"){ // http://localhost:4300/
        // action à réaliser
        // traitements
        // stopper le réponse
        response.end();
    } else if( request.url == "/data.json"){ // http://localhost:4300/data.json
        response.end();
    } else if( request.url == "/data.xml"){ // http://localhost:4300/data.xml
        response.end();
    } else { // http://localhost:4300/toto http://localhost:4300/tata ... 
        response.writeHead(404); // message pour les robots d'indexation des moteurs de recherche
        response.write("Erreur 404"); // message visuel pour internaute
        response.end();
    }
}); // route "Router" => refaire ce genre d'exercice avec une librairie express 
// définir le port d'écoute du serveur 
app.listen(4300, function(){ 
    console.log("le serveur est démarré");
})
// http://localhost:4300/


// cas pratique : 
// dans le dossier jour2, créer un nouveau fichier 01-exo.js
// ce fichier utilise la module native http et qui permet de créer un serveur 

// si vous appelez l'adresse suivante : http://localhost:3045 
// le serveur va vous répondre "bienvenue dans votre site internet"

// si vous appelez l'adresse suivante : http://localhost:3045/presentation.html 
// le serveur va afficher le contenu d'une fichier 01-presentation.html présent à côté du fichier 01-exo.js

// si vous appelez l'adresse suivante : http://localhost:3045/info.xml 
// le serveur va vous répondre le contenu d'une fichier 01-info.xml présent à côté du fichier 01-exo.js


// si vous appelez l'adresse suivante : http://localhost:3045/profil.json 
// le serveur va vous répondre le contenu d'une fichier 01-profil.json présent à côté du fichier 01-exo.js