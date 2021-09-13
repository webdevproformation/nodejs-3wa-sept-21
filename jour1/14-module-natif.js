// 14-module-natif.js
// navigateur => window.document => permettre d'accéder à la page web et de pouvoir modifier les différentes balises de la page 
// window et la propriété document > créée automatiquement par le navigateur 

// dans nodejs window et document n'existe pas 
// module disponible dans nodejs 
// module natifs // build in modules

// la liste des modules natifs de nodejs 
// https://www.w3schools.com/nodejs/ref_modules.asp
// https://nodejs.org/en/ > https://nodejs.org/api/

// Path => permettre de chemin => path vers de fichiers / dossier
// fs (FileSystem) => permettre de créer des fichiers / dossier / recherche dans votre système 
// events => créer des événements
// http => permet de créer des serveurs
// url => traiter des urls ...

const { basename , extname , dirname , sep} = require("path"); // pas besoin de lui créer le fichier path.js 

console.log(basename(__filename)); // 14-module-natif.js
console.log(extname(__filename)); // .js
console.log(dirname(__filename)); // C:\Users\HP\Desktop\node\jour1
console.log(sep); // windows \ Linux ou sur MacOS => / 

// créer le fichier 15-exo.js 
// ce module utilise le module natif path 

// ce fichier contient une variable dossier 
// c'est un tableau qui contient les valeurs suivantes :
// "index.js" , presentation.html , style.css 

// parcourir le tableau et si le fichier contient l'extension .js 
// alors l'afficher dans la console 




