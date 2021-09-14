const http = require("http");
const fs = require("fs");
const server = http.createServer();
server.on("request", function(req , res){
    const url = req.url ;
    if(url === "/"){
        fs.readFile("18-index.html", function( error , fichier) {
            res.write(fichier);
            res.end(); // finir l'envoie de la réponse du serveur 
        }); // router 
    }
    else if(url === "/contact"){
        res.write("<h1>Page de contact</h1>");
        res.end();  // finir l'envoie de la réponse du serveur 
    } else {
        res.writeHead( 404 ); // entête de la réponse HTTP  => SEO (Search Engine Optimization)
        // robots de référencement des moteurs de recherche => Google
        res.write("<h1>Erreur 404 page introuvable</h1>"); // humain 
        res.end();  // finir l'envoie de la réponse du serveur 
    }
}); // le comportement du serveur lorsqu'on l'appel
server.listen( 4200 , function() {
    console.log("le serveur nodejs est démarré sur le port 4200");
} ); // définir le port d'appel du serveur 

// dans la console => message callback de la méthode listen
// le terminal ne vous affiche pas le prompt et ne vous redonne pas la main 
// la méthode on () attend une requete 
// firefox / chrome ... => http://localhost:4200/ => /
//                         http://localhost:4200/contact
// Ctrl + C => stopper le server

// @ demain !!!!!!!!!!!!!!!!!!!!!!!!!