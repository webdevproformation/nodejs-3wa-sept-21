const { createServer } = require("http");
const { readFile } = require("fs");
const app = createServer();
const PORT = 3045 ;

app.on("request", function(req , res){
    const url = req.url;

    if(url == "/"){ // http://localhost:3045 
        res.write("bienvenue dans votre site internet");
        res.end();
    }else if(url == "/presentation.html"){ // http://localhost:3045/presentation.html

        readFile("01-presentation.html", "utf8" , function(error, fichier){
            if(!error){
                res.write(fichier);
                res.end();
            }
        });

    }else if(url == "/info.xml"){ // http://localhost:3045/info.xml
        readFile("01-info.xml", "utf8" , function(error, fichier){
            if(!error){
                res.write(fichier);
                res.end();
            }
        });
    }else if(url == "/profil.json"){ // http://localhost:3045/profil.json 
        readFile("01-profil.json", "utf8" , function(error, fichier){
            if(!error){
                res.writeHead(200 , {"Content-Type" : "application/json"});
                // pour certain navigateur (Firefox) => mode présentation des fichiers json
                // chrome uniquement textuel (sauf si installation d'une extension)
                res.write(fichier);
                res.end();
            }
        });
    }
});

app.listen(PORT , function(){
    console.log(`le serveur node écoute sur le port ${PORT}`);
});

// cd jour2
// node 01-exo.js

// 02-npm.js

