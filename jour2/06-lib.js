// fonction doit me retourner false 
// variable = "" => false
// variable = 0 => false
// variable = [] => false 
// sinon true

function empty(variable){
    let reponse = true ;
    if(typeof(variable) == "string" && variable.length == 0){
        return false;
    }
    if(typeof(variable) == "number" && variable === 0){
        return false;
    }
    if(Array.isArray(variable) && variable.length === 0){
        return false;
    }
    return reponse;
}

module.exports = empty ;
// 06-lib.test.js

// créer un nouveau fichier 07-exo.js
// cet fichier contient une fonction qui permet de palindrome 
// mot qui peuvent se lire dans les deux sens 
// lol 
// kayak 
// Laval
// répondre true 

// si vous lui donnez comme valeur 
// bonjour
// hello
// salut 
// répondre false 

// créer la fonction palindrome 
// créer un fichier 07-exo.test.js qui vérifie chacun des cas mentionnés via la librairie jest



