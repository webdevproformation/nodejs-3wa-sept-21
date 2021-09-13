// closure ??
function serveur(){
    const ip = "1.2.3.4";
    return function() { 
        console.log(ip);
    }
}

// closure => rappel spécial plus tard sur ce concept de javascript 

module.exports = serveur  ;

// 09-main.js


// créer le fichier 10-exo.js 
// ce fichier contient une variable :

/*
vehicule qui est objet littéral 
    propriete : 
        anneeAchat 2019
        proprietaire Alain
    méthode
        achat : le nombre d'année entre de jours entre aujoud'hui et l'année d'achat

exporter cet objet littéral 

créer le fichier 10-main.js 
lors de l'import exécuter la méthode achat de l'objet litteral et l'exécuté directement
et l'afficher dans la console

*/ 

