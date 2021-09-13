// créer un programme en ligne de commande 
// nodejs met à disposition une variable 

console.log(process.argv);

// node 17-process.js
/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\HP\\Desktop\\node\\jour1\\17-process.js'
]
*/ 
// node 17-process.js index.html
/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\HP\\Desktop\\node\\jour1\\17-process.js',
  'index.html'
]
*/

const { writeFile } = require("fs")

const arguments = process.argv.slice(2);
console.log(arguments);

arguments.forEach( function (nomFichier){
    writeFile(nomFichier , "" , function(error, fichier){
        console.log("le fichier est créé ");
    })
});

// node 17-process.js 17-index.html 17-style.css 17-script.js

