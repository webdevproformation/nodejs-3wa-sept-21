// 05-commandes-npm.js

// npm init => créer le fichier package.json 

// installer une ou plusieurs librairies simultanément 

// npm i underscore lodash mangoose express
// npm install underscore lodash mangoose express

// plusieurs librairies supprimer une 

// npm uninstall underscore
// npm un underscore

// installer une ou plusieurs librairies simultanément de développement
// librairies qui vont vous aider pendant la phase de développement
// utiles uniquement pour aider le développeur à coder plus rapidement 
// pas utiles pour le projet 

// npm i <package> -D
// npm i <package> --save-dev

// npm i cowsay --save-dev
// package.json a été modifié ET ajouté une nouvelle propriété

/*
,
  "devDependencies": {
    "cowsay": "^1.5.0"
  }
*/
// librairie qui permet de personnaliser l'affichage dans le terminal 

const cow = require("cowsay");

const info = cow.say({ text:"bonjour" , e : "Oo" , T : "UU"} );

console.log(info);

// librairies qui permettent de réaliser des test unitaires 
// dans comme dépedance de développement que comme des dépendances obligatoires
// PHPUnit => 
// en javascript => réaliser des tests unitaires
// jest 
// jasmine
// mocha 
// => rdv 14h !! @ toute suite !! 

// depDeveloppement => librairie qui permettre au développeur de gagner en productivité / qualité de code 

// npm i jest --save-dev

// 06-lib.js

