// explicitement dire quelle variable je veux importer (utiliser dans mon script)
const lib = require("./06-module");
const { b , etudiant } = require("./06-lib"); // destructuration des variables envoyées depuis le module


console.log(lib.unite);
lib.calcul();
console.log(b);
console.log(etudiant.nom);
etudiant.description();

// erreur => ligne 1
// colonne où est située l'erreur console.log(distance);

// message d'erreur ReferenceError: distance is not defined
// stack d'exécution : la pile d'exécution 
// l'ensemble des fichiers / des fonctions qui ont été exécuté par nodejs pour exécuter votre fichier .js 
