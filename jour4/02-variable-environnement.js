// 02-variable-environnement.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 1234 ;
const env = app.get("env");  // https://expressjs.com/fr/4x/api.html#app.settings.table

app.get("/", (req ,rep) => {
    console.log(env);
    const lang = process.env.LANG_ENV;
    if( env == "production"){
        return rep.send(`bienvenu sur le serveur de production ${lang}`);
    }
    rep.send(`bienvenu ${lang}`);
});

app.listen( PORT , () => console.log(` serveur écoute sur le port ${PORT}`) );

// export NODE_ENV=production
// export LANG_ENV=en
// nodemon 01

// si vous migrez ce fichier dans un hébergement (en ligne)
// déterminé dynamique par le serveur dans lequel vous allez le stocker
// au lieu de saisir un numéro de port 1234
// process.env.PORT => récupére la variable d'environnement
// sinon 1234
// nodemon 02-variable-environnement.js
// Windows /  => set PORT=2222 
// nodemon 02-variable-environnement.js
// MacOS / Windows avec un terminal bash 
// export PORT=2222 && nodemon 02-variable-environnement.js

// si vous souhaitez enlever la valeur 2222 à cette variable d'environnement dans le shell
// export PORT=
// nodemon 02-variable-environnement.js

// comportement que vous souhaitez réaliser dans environnement de test
// comportement que vous souhaitez réaliser dans environnement de production 

// commande pour afficher l'ensemble des variables d'environnements
// printenv | less

// déplacer flêche vers le bas / vers haut 
// q pour quit => vous redonne la main sur le terminal