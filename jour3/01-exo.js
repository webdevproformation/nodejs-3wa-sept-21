// recrée le fichier package.json
// retélécharge le contenu du dossier node_modules

// solution 1
// resaisir les commandes 

// solution 2 
// copie le fichier package.json du dossier jour2 et je le colle dans le dossier jour3 
// npm i
// npm install  
// pas besoin de préciser les packages à télécharger
// npm va trouver le fichier package.json => dependencies et devDependencies

const {createServer} = require("http");
const { readFile } = require("fs");
const server = createServer();
const _ = require("lodash");
const PORT = 3333 ;
server.on("request", function(req , rep){
    if(req.url == "/"){
        readFile("01.portfolio.json" , "utf8" , (error , file) => {
            rep.writeHead(200, {"Content-Type" : "application/json"});
            rep.write(file);
            rep.end();
        });
    }else if(req.url == "/posts"){
        readFile("01.articles.json" , "utf8" , (error , file) => {
            rep.writeHead(200, {"Content-Type" : "application/json"});
            rep.write(file);
            rep.end();
        });
    }else if(req.url == "/all"){
        const reponse = [];
        readFile("01.portfolio.json" , "utf8" , (error , file) => {
            
            try{
                if( !error ){
                    reponse.push( JSON.parse(file) );
                }else {
                    reponse.push( JSON.stringify(error) );
                }
            }catch( err ){
                reponse.push( JSON.parse("erreur exécution") );
            }
            
            readFile("01.articles.json" , "utf8" , (error , file2) => {
                rep.writeHead(200, {"Content-Type" : "application/json"});
                reponse.push( JSON.parse(file2) );
                rep.write(JSON.stringify(reponse)); // rep.write("string") // 
                rep.end();
                // json generator => https://www.json-generator.com/
            });
        });
    }
});

server.listen(PORT , function(){
    console.log(`le serveur écoute sur le port ${PORT}`);
});
// node 01-exo.js
// pendant la phase de développement nodemon 01-exo.js

// 02-api.js dans le dossier jour3