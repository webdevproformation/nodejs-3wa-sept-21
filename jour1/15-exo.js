const {extname} = require("path");

const dossier = ["index.js" , "presentation.html" , "style.css" ];

dossier.forEach( (fichier) => {
    if(extname( fichier) === ".js"){
        console.log(fichier);
    }
} );
// node 15-exo.js
// 15h55 => bon café @ toute suite !! 