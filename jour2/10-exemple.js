// nodemon .\10-exemple.js
// dès que je fais une modification du fichier 10-exemple.js

const _ = require("lodash"); // npm i lodash 

const tableau = [1,2,3,4];

// prendre le tableau et rassembler les éléments par paire de deux 
// [[1,2],[3,4]]

const tableauChuck= _.chunk(tableau, 2);
console.log(tableauChuck);

// dès que je fais une dans un fichier source => Ctr + C  node fichier.js


// 1 installer le package standard en global
// 2 créer un fichier 11-exo.js 
// ce fichier contient le code suivant 
/*
function empty(variable){
    let reponse = true ;
    if(typeof(variable)== "string" && variable.length == 0){
        return false;
    }
    if(typeof(variable) =="number" && variable === 0){
        return false;
    }
    if(Array.isArray(variable) && variable.length === 0)
    {
        return false;
    }
    return reponse;
}
// 3 utiliser la librairie standard pour detecter toutes les améliorations pour rendre ce code conforme aux règles de la librairie standard
// 4 trouver la commande pour rendre standard le code 

*/ 
