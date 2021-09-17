const express = require("express");
const PORT = process.env.PORT || 1237
const pug = require("pug");
const app = express();

app.engine('pug', pug.__express);

// moteur de template pour pouvoir afficher des contenus dynamiques
// dans le fichier html => variable dynamique 
// base de données 
// express 
/*

    EJS
    Pug => https://pugjs.org/api/getting-started.html
    Twig => Symfony 
    npm install pug
    Mustache
    Hogan
    jsHTML

*/

app.get("/" , (req, rep) => {
    const fichier = pug.compileFile("08-accueil.pug");
    const resultat = fichier({
        titre : "découverte de Pug", 
        name : "Etudiant" ,
        competences : ["js", "node", "angular"]
     });
    rep.send(resultat);
});

app.listen(PORT , () => console.log(PORT));

// persistance => base de données pour stocker les infos => Mongo DB => installé express => MOngoDB 