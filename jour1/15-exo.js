const {extname , resolve} = require("path");

const dossier = ["index.js" , "presentation.html" , "style.css" ];

dossier.forEach( (fichier) => {
    if(extname( fichier) === ".js"){
        console.log(fichier);
    }
} );
// node 15-exo.js
// 15h55 => bon café @ toute suite !! 

// webpack ?? => fichier configuration webpackconf.js

// https://webpack.js.org/configuration/

const asset = resolve(__dirname , "../asset" , "css");
// C:\Users\HP\Desktop\node\asset\css // chemin absolu
// /home/user/Desktop/node/asset/css
console.log(asset);

// 16-fs.js
